<script lang="ts" setup>
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import { IChapter } from '~/types/api'
import vueDanmaku from 'vue3-danmaku/dist/vue3-danmaku.esm'
import { LIST_BY_EPISODE_ID, ADD_BARRAGE } from '~/api/bulletScreen'
import { message } from 'ant-design-vue'

const { personalInfo } = $(useUser())
const { videoDanmuList, handleAddDanmu } = $(useSocket())

const { productId, episodeId, chapterList } = defineProps<{
  productId: number
  episodeId: number
  chapterList: any
}>()

const emit = defineEmits<{ (e: 'getVideoData', value: number): void }>()

/**
 * 弹幕逻辑
 */
let { global } = $(useDanmuState()) // 弹幕开关
let danmakuRef = $ref<InstanceType<typeof vueDanmaku>>()
let danmuTimer = $ref<NodeJS.Timer>()
let oVideoPlayer: HTMLVideoElement
let danmuList = $ref([])
async function getDanmuData(push?: boolean) {
  if (!global) return
  const currentTime = Math.floor(oVideoPlayer.currentTime)
  if (!push) {
    danmuList = (
      await LIST_BY_EPISODE_ID({
        productId: productId,
        episodeId: episodeId,
        endTime: currentTime + 10,
        beginTime: currentTime
      })
    ).data
  } else {
    await LIST_BY_EPISODE_ID({
      productId: productId,
      episodeId: episodeId,
      endTime: currentTime + 10,
      beginTime: currentTime
    }).then((item) => {
      item.data.map((subItem) => danmakuRef.push(subItem))
    })
  }
}

/**
 * 实例化播放器
 */
let speed = false
let oVideo: HTMLVideoElement // 获取video DOM
let oDanmu: HTMLDivElement // 获取弹幕 DOM
let myPlay = $ref(null)
let init = $ref(false) // 控制弹幕展示时机
let player: videojs.Player | null = null
// 获取缓存中的播放速度，否则为1
let playBackRate = $ref(process.client ? (localStorage.getItem('playBackRate') ? Number(localStorage.getItem('playBackRate')) : 1) : 1)

let newPlayer = async (playSrc: string) => {
  if (process.server) return
  if (!player) {
    await import('videojs-hotkeys')
    player = videojs(myPlay, {
      controls: true, // 控制器
      fill: true, // 填充模式
      playbackRates: [0.5, 1, 1.25, 1.5, 1.75, 2.0],
      plugins: {
        hotkeys: {
          volumeStep: 0.1,
          seekStep: 5,
          enableModifiersForNumbers: false
        }
      }
    })
    init = true

    player.on('play', onPlayerPlay) // 播放器开始
    player.on('pause', onPlayerPause) // 播放器暂停
    player.on('loadedmetadata', onPlayerReady) // 播放器加载完成
    player.on('ended', nextEpisod)  // 播放器结束
    player.on('seeked', onPlayerSeeked) // 手动选择进度
    // 视频尺寸改变，重新计算滚动距离
    player.on('fullscreenchange', () => {
      oDanmu.style.width = `${oVideoPlayer.offsetWidth}px`
      oDanmu.style.height = `${oVideoPlayer.offsetHeight}px`
      danmakuRef.resize()
    })
    // 改变播放速度
    player.on('ratechange', () => {
      if (speed) {
        process.client && localStorage.setItem('playBackRate', player.playbackRate().toString())
        playBackRate = player.playbackRate()
      }
    })
  }
  speed = false
  player.src({
    src: playSrc,
    type: 'application/x-mpegURL' // 流设置: m3u8
  })
}

// 当播放器暂停的时候弹幕暂停
const onPlayerPause = function () {
  if (danmuTimer) clearInterval(danmuTimer)
  danmakuRef?.pause()
}

// 当播放器播放时候滚动弹幕
const onPlayerPlay = function () {
  if (danmuTimer) clearInterval(danmuTimer)
  danmuTimer = setInterval(async () => {
    await getDanmuData(true)
  }, 10 * 1000)
  danmakuRef?.play()
}

// 当播放器加载好的时候初始化dom
const onPlayerReady = async function () {
  oVideo = document.querySelector('.vjs-tech') as HTMLVideoElement
  oVideoPlayer = document.querySelector('#video_wrapper div video') as HTMLVideoElement

  await getDanmuData()
  oDanmu = document.querySelector('#_danmu') as HTMLDivElement

  // 设置弹幕的显示位置
  nextTick(() => {
    oDanmu.style.width = `${oVideo.offsetWidth}px`
    oDanmu.style.height = `${oVideo.offsetHeight}px`
    oDanmu.style.top = '0'
    oDanmu.style.left = '0'
    oDanmu.style.zIndex = '1000'
    oDanmu.style.position = 'absolute'
    oDanmu.style.pointerEvents = 'none'
  })
  // 视频自动播放
  player.play()
  // 设置播放速度
  player.playbackRate(playBackRate)
  speed = true
}

// 当播放器手动选择进度
const onPlayerSeeked = async function () {
  if (danmuTimer) clearInterval(danmuTimer)
  danmuList = []
  // 停止弹幕清空
  danmakuRef.stop()
  // 重置弹幕
  danmakuRef.reset()
  // 请求数据
  await getDanmuData()
  // 弹幕开始
  danmakuRef.play()
  // 开启弹幕接口轮询
  danmuTimer = setInterval(async () => {
    await getDanmuData(true)
  }, 10 * 1000)
}

// 视频播放结束自动切换本章下一集
function nextEpisod() {
  (chapterList as IChapter[]).forEach((item) => {
    item.episodeList.forEach((subItem, subIndex) => {
      // 如果真实集数据不存在改集 终止
      if (episodeId !== subItem.id) return
      // 该集是否有下一集，有的话请求下一集播放地址
      if (subIndex + 1 < item.episodeList.length) {
        emit('getVideoData', item.episodeList[subIndex + 1].id)
      } else {
        // 跨章时暂停
      }
    })
  })
}

// 监听videoDanmuList数据变化，增加弹幕
watch(
  () => videoDanmuList.length,
  () => {
    videoDanmuList.forEach((item) => {
      danmakuRef.add(item)
    })
    videoDanmuList.length = 0
  }
)

// 监听弹幕开关变量控制显示隐藏
watch(() => global, (val) => {
  val ? danmakuRef.show() : danmakuRef.hide()
})

// 发送弹幕
const sendDanmu = async function (danmuContent: string) {
  if (!danmuContent) {
    message.warn('请输入弹幕')
    return
  }
  const params = {
    productId: productId,
    episodeId: episodeId,
    content: danmuContent,
    playTime: oVideoPlayer.currentTime + Math.random() / 0.5
  }
  // 增加弹幕接口
  const data = await ADD_BARRAGE(params)
  if (data.code === 1) {
    // socketio增加实时弹幕api
    handleAddDanmu({
      content: danmuContent,
      channel: 'video',
      playTime: 0,
      accountId: personalInfo.id,
      head_img: personalInfo.head_img
    })
  }
}

// 组件即将销毁时删除播放器
onBeforeUnmount(() => {
  if (player) player.dispose()
  if (danmuTimer) clearInterval(danmuTimer)
})

defineExpose({ newPlayer, sendDanmu })
</script>

<template>
  <Teleport v-if="init" to=".video-js">
    <div id="_danmu">
      <vueDanmaku style="width: 100%; height: 100%" ref="danmakuRef" v-model:danmus="danmuList" :channels="5"
        :autoplay="false" :speeds="160" useSlot>
        <template v-slot:dm="{ danmu }">
          <div flex items-center>
            <img :src="danmu.head_img" wh-25 rounded-full />
            <span class="TEXT" :class="danmu.style">{{ danmu.content }}</span>
          </div>
        </template>
      </vueDanmaku>
    </div>
  </Teleport>
  <video ref="myPlay" controls style="height: 100%; width: 100%"
    class="video-js vjs-default-skin vjs-big-play-centered" />
</template>

<style scoped>
.TEXT {
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  background-clip: text;
}

.PLANT {
  color: white;
  -webkit-text-stroke: 2px black;
}

.COMMON_1 {
  color: transparent;
  background-image: linear-gradient(90deg, #fdb34b 0%, #fbe36c 98.57142857142858%);
}

.COMMON_2 {
  color: transparent;
  background-image: linear-gradient(90deg, #5094ea 0%, #5d41ba 45.34285714285714%, #c669a0 98.57142857142858%);
}

.COMMON_3 {
  color: transparent;
  background-image: linear-gradient(90deg, #fdb34b 0%, #fbe36c 98.57142857142858%);
}

.COMMON_4 {
  color: transparent;
  background-image: linear-gradient(90deg, #5094ea 0%, #5d41ba 45.34285714285714%, #c669a0 98.57142857142858%);
}

.COMMON_5 {
  color: transparent;
  background-image: linear-gradient(90deg, #fe4d5f 0%, #ffc666 98.57142857142858%);
}

.VIP_1 {
  background-image: linear-gradient(90deg, #785cc8 0%, #854edb 98.57142857142858%);
}

.VIP_2 {
  background-image: linear-gradient(90deg, #254abd 0%, #7dabef 98.57142857142858%);
}

.VIP_3 {
  background-image: linear-gradient(90deg, #cf45e7 0%, #d967e3 98.57142857142858%);
}

.VIP_4 {
  background-image: linear-gradient(90deg, #fdb34b 0%, #fbe36c 98.57142857142858%);
}

.VIP_5 {
  background-image: linear-gradient(90deg, #785cc8 0%, #854edb 98.57142857142858%);
}

.VIP_TRAIN_1 {
  background-image: linear-gradient(90deg, #fcb64f 0%, #ffb105 98.57142857142858%);
}

.VIP_TRAIN_2 {
  background-image: linear-gradient(0deg, #bb4444 0%, #f66d68 90.81349206349216%);
}

.TRAIN_1 {
  background-image: linear-gradient(-180deg, #ecc27d 9.186507936507835%, #b76420 100%);
}

.TRAIN_2 {
  background-image: linear-gradient(-180deg, #2e6ec4 9.186507936507835%, #4252c4 100%);
}
</style>
