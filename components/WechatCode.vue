<script lang='ts' setup>
import { message } from 'ant-design-vue';
import { GET_QR_CODE, WATCH_SCAN } from '~/api/wechat'

let { wxModel, registerModel } = $(useModel())
let { switchLoginState } = $(useUser())

const lock = ref(true)
const qrCode = ref('')
const timer = ref(null)

/**
 * 获取登录二维码
 */
const getQrCode = async () => {
  if (lock.value) {
    lock.value = false
    try {
      const { code, data } = await GET_QR_CODE()
      if (code === 1) {
        qrCode.value = data.qrcode
        //轮询检测用户是否扫码
        timer.value = setInterval(() => {
          watchScanData(data.ticket)
        }, 3000)
        lock.value = true
      }
    } catch (error) {
      message.error(error.message)
    }
  }
}
await getQrCode()

/**
 * 检测用户是否扫码
 * @param ticket 微信回调返回的ticket
 */
const watchScanData = async (ticket: string) => {
  const { code, data } = await WATCH_SCAN(ticket)
  if (code === 1) {
    switchLoginState(data)
    wxModel = false
    registerModel.base = false
    clearInterval(timer.value)
  }

  watch(() => wxModel, (val) => {
    if (!val) {
      clearInterval(timer.value)
    }
  })
}

</script>

<template>
  <div flexc flex-col mt-50px>
    <img w-200px h-200px :src="qrCode" />
    <div flexc mt-26px>
      <img src="/images/wechat_icon.png" cursor-pointer mr-2px w-34px h-34px />
      <span text-18px color="#555555">使用微信扫一扫登录</span>
    </div>
  </div>
</template>

<style lang='less' scoped></style>