<script lang='ts' setup>
import { GET_CHAPTER } from '~/api/product'

const realVideoId = Number(useRoute().query.id) || 1

let expandShow = $ref(false)

const navList = [
  {
    title: '章节',
    img: '/images/zhangjie.png',
    imga: '/images/zhangjiea.png'
  }
]

// 右侧tab选择
let navSelect = $ref(null)
const navClick = (val: number) => {
  if (navSelect === val) {
    navSelect = -1
    expandShow = !expandShow
    return
  } else {
    // 将选中的集展示再视口
    if (val === 0) {
      if (process.server) return
      const oChapterSection = document.querySelector('.chapter-section') as HTMLDivElement
      setTimeout(() => {
        for (let i = 0; i < oChapterSection.children.length; i++) {
          const chapter = oChapterSection.children[i]
          for (let i = 0; i < chapter.children[1].children.length; i++) {
            const episode = chapter.children[1].children[i]

            if (episode.classList.contains('selected')) {
              chapter.scrollIntoView({ behavior: 'auto', block: 'center' })
              document.body.scrollIntoView()
              break
            }
          }
        }
      })
    }
    expandShow = true
    navSelect = val
  }
}

// 视频集
let _episodeId = $ref(Number(useRoute().query.eid))

// 目录接口数据
const data = reactive({ chapterList: [] })
const getChapterList = async () => {
  const res = await GET_CHAPTER(realVideoId)
  data.chapterList = res.data
  _episodeId = _episodeId || res.data[0].episodeList[0].id
}


onMounted(() => {
  getChapterList()
})

useHead({ title: '小滴课堂 - 视频播放' })
</script>

<template>
  <div wfull flexc flex-col>
    <div wfull bg="#191917" absolute h-87vh top-90px />
    <div class="video-play" h-90vh>
      <div class="left">
        <div class="left-item" v-for="(item, index) in navList" :class="{ active: navSelect === index }"
          :style="{ backgroundColor: navSelect === index ? '#20201e' : '' }" @click="navClick(index)">
          <img wh-28 :src="navSelect === index ? item.imga : item.img" />
          <div class="text">{{ item.title }}</div>
        </div>
      </div>
      <div v-show="expandShow">
        <!-- 章集 -->
        <div class="sidebar-left" v-show="navSelect === 0">
          <div class="chapter-section">
            <div class="item" v-for="(item, index) in data.chapterList">
              <div class="chapter-text" :title="item.title">第 {{ index + 1 }} 章&nbsp; {{ item.title }}</div>
              <div class="section">
                <div class="section-item" v-for="(subItem, subIndex) in item.episodeList"
                  :class="{ selected: subItem.id === _episodeId }" :title="subItem.title">
                  第 {{ subIndex + 1 }} 集 &nbsp;{{ subItem.title }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.nav-bg {
  background-color: #20201e;
  height: 94.5%;
  width: 360px;
  left: 140px;
  position: absolute;
  z-index: 1000;
}

:deep(.video-js .vjs-next-control .vjs-icon-placeholder:before) {
  font-family: VideoJS;
  font-weight: normal;
  font-style: normal;
  content: '\f120';
  transform: rotate(180deg);
  cursor: pointer;
}

.introduce {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 87%;
  justify-content: space-between;
  padding-bottom: 21px;
}

.video-player {
  flex: 1;
  margin-right: 80px;
}

:deep(.vjs-paused) {
  .vjs-big-play-button {
    display: block;
  }
}

.video-play {
  width: 100%;
  font-size: 12px;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 20px 20px 20px 0;

  .left {
    width: 140px;
    height: 87%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .left-item {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 10px;
      color: #aaaaaa;
      cursor: pointer;
    }

    .active {
      background-color: #3b4046;
      color: #fff;
    }

    .text {
      margin-top: 5px;
      font-size: 16px;
      font-weight: 600;
    }
  }

  .chapterIcon {
    height: 45px;
    position: absolute;
    z-index: 1000;
    top: 40%;
    cursor: pointer;
  }

  .tabs {
    color: white;

    li {
      cursor: pointer;
      width: 80px;
      height: 80px;
      border-radius: 5px;
      background-color: #646e77;
      text-align: center;
      font-size: 20px;
      font-weight: 500;

      &:not(:nth-child(2)) {
        line-height: 80px;
      }

      &:nth-child(2) {
        padding: 18px;
        line-height: 22px;
      }
    }
  }

  .danmu {
    display: flex;
    align-items: center;
    justify-content: center;

    &>*:not(img) {
      color: white;
      background-color: #565e65;
    }

    &>button {
      width: 100px;
      border-radius: 5px;
    }
  }

  .play-main {
    width: 1200px;
    display: flex;
    justify-content: space-between;
    position: relative;
    height: 600px;
  }

  .sidebar-left {
    cursor: pointer;
    background-color: #20201e;
    color: #fff;
    position: absolute;
    z-index: 1000;
    left: 140px;
    height: 93%;

    .chapter-section {
      padding: 10px;
      overflow-y: auto;
      height: 100%;

      .item {
        margin-bottom: 5px;

        .chapter-text {
          width: 350px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: 30px;
          font-size: 14px;
          margin-bottom: 5px;
        }

        .section {
          margin-left: 20px;
          width: 350px;
          color: #ddd;

          .section-item {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            line-height: 25px;
            color: hsla(0, 0%, 100%, 0.6);
            margin-bottom: 5px;
          }

          .selected {
            color: #ec1500;
          }
        }
      }
    }
  }

  .play-header {
    display: flex;
  }
}
</style>
