<script lang="ts" setup>
const { wechat, outTradeNo } = defineProps<{ wechat: { id: string, visible: boolean }, outTradeNo: string }>()

// 自定义事件
defineEmits<{ (e: 'onCancel'): void }>()

</script>

<template>
  <div class="wechat" v-if="wechat.visible">
    <div class="bg">
      <div class="content flexc flex-col wfull relative">
        <img @click="$emit('onCancel')" src="/images/svg/close_icon.svg"
          class="absolute top-30px right-30px cursor-pointer select-none" />
        <p mt-24px color="#7f7f7f" ml-15px>订单编号：{{ outTradeNo }}</p>
        <p mt-24px color="#7f7f7f" ml-15px>请尽快扫码完成支付，以便订单尽快处理！</p>
        <div class="bottom-opt">
          <a-button @click="$emit('onCancel')">关闭</a-button>
          <a-button type="primary">购买</a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.wechat {
  overflow: hidden;
}

.bg {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1100;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}

.content {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  outline: 0;
  z-index: 1200;
  width: 450px;
  height: 200px;
  margin: auto;
  border-radius: 10px;
  background-color: white;
  padding: 30px;
  box-shadow: 0px 0px 10px 0px rgba(150, 149, 149, 0.6);

  p {
    margin: 0;
  }

  .bottom-opt {
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: flex-end;

    button {
      margin-left: 10px;
    }
  }
}
</style>