<script lang="ts" setup>
import { GET_VIDEO_DETAILS } from '~/api/product'
import { WECHAT_PAY, QUERY_STATE } from '~/api/order'
import Wechat from './payPage/Wechat.vue'

// 课程详情数据
const detailsData = reactive((await GET_VIDEO_DETAILS(Number(useRoute().query.id) || 1)).data)

// 支付订单号
let outTradeNo = $ref('')

// 定义二维码 DOM id和控制弹窗展开变量
const wechat = reactive({
  id: 'wechatQrcode',
  visible: false
})

// 关闭二维码弹窗
const onCancel = () => {
  wechat.visible = false
  clearInterval(timer)
}

// 立即支付按钮
const getWechatPay = async () => {
  // 请求支付二维码
  const data = await WECHAT_PAY({ id: (Number(useRoute().query.id) || 1), type: 'PC' })
  // 如果不是客户端时机或者请求不成功就终止
  if (data.code !== 1 || process.server) return
  outTradeNo = data.data.out_trade_no
  wechat.visible = true
}

// 监听支付回调
let timer = $ref(null)
watch(
  () => outTradeNo,
  (val) => {
    // 三秒查询查询一次
    timer = setInterval(async () => {
      const data = await QUERY_STATE(val)
      if (data.code === 1 && data.data.order_state === 'PAY') {
        clearInterval(timer)
        await navigateTo('/')
      }
    }, 3000)
  }
)

useHead({
  title: '小滴课堂 - 商品支付'
})
</script>

<template>
  <div wfull flex="~ col" justify-center items-center>
    <div w-1200px flexc flex-col>
      <div rounded-10px h-300px p="y-20px x-30px" style="box-shadow: 0px 0px 10px 0px #d5d5d5">
        <div w-1200px flex justify-between>
          <div flex w-full>
            <img :src="detailsData.cover_img" w-200px h-135px />
            <div flex flex-col justify-center ml-30px>
              <h2 mb-30px color="#555555" text-24px> {{ detailsData.title }} </h2>
              <p mb-2 font-600 color="#aaaaaa" text-30px>×1</p>
            </div>
          </div>
          <div mt-10 text-size-lg p0>¥{{ Number(detailsData.amount).toFixed() }}</div>
        </div>
      </div>
    </div>
    <div wfull style="box-shadow: 0px 0px 10px 0px #d7d7d7" h-120px flexc mt-50px>
      <div w-1200px flexb>
        <div relative>
          <img src="/images/svg/wechat_pay.svg" border-2 border-orange />
          <img src="/images/pay_active.png" alt="" class="xiabiao">
        </div>
        <div flex>
          <div>
            <span color="#222222" text-24px>总计支付：</span>
            <span text-44px color="#ff4439">￥{{ Number(detailsData.amount).toFixed() }}</span>
          </div>
          <button bg="#f38e48"
            class="btn border-none ml-45px mr-20px center-text-64 w-210px rounded-full text-white text-24px"
            @click="getWechatPay">
            立即支付
          </button>
        </div>
      </div>
    </div>
    <Wechat :wechat="wechat" :outTradeNo="outTradeNo" @onCancel="onCancel()" />
  </div>
</template>

<style lang="less" scoped>
:deep(.ant-card-body) {
  padding: 10px;
}

.xiabiao {
  position: absolute;
  right: 0;
  bottom: 0;
  height: 32px;
}
</style>