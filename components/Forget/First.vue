<script lang="ts" setup>
import {SEND_CODE} from '@/api/notify'
import { message } from 'ant-design-vue'
const { forgetModel, switchForget } = $(useModel())

const currentInfo = reactive({
  phone: '',
  captcha: ''
})
const captchaSrc = ref(`http://127.0.0.1:8081/api/notify/v1/captcha?type=change&time=${Date.now()}`)

const rules = {
  phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
  captcha: [{ required: true, message: '请输入图形验证码', trigger: 'blur' }]
}

const resetCaptcha = () => {
  if (captchaSrc.value.includes('time')) {
    captchaSrc.value = captchaSrc.value.replace(/time=\d+/, `time=${Date.now()}`)
  } else {
    captchaSrc.value = `${captchaSrc.value}&time=${Date.now()}`
  }
}

const onFinish = async () => {
  const {code, data} = await SEND_CODE(currentInfo.phone, currentInfo.captcha, 'change');
  if(code === 1) {
    forgetModel.phoneCache = currentInfo.phone
    message.success("发送成功")
    switchForget()
  }
}
</script>

<template>
  <a-modal :footer="null" class="w-350px!" ref="formRef" v-model:visible="forgetModel.first">
    <h2 mb-6>修改密码</h2>
    <a-form autocomplete="off" ref="formRef" :model="currentInfo" @finish="onFinish">
      <a-form-item name="phone" :rules="rules.phone">
        <a-input placeholder="请输入手机号" v-model:value="currentInfo.phone" />
      </a-form-item>

      <!-- 图形验证码  -->
      <a-form-item name="captcha" :rules="rules.captcha">
        <div flex>
          <a-input placeholder="请输入图形验证码" autoComplete="false" v-model:value="currentInfo.captcha">
            <template #suffix>
              <reload-outlined mr-3px cursor-pointer @click="resetCaptcha" />
            </template>
          </a-input>
          <div flex justify-center items-center>
            <img h-32px :src="captchaSrc" />
          </div>
        </div>
      </a-form-item>

      <a-form-item>
        <a-button block bg="#f38e48!" b="#f38e48!" rounded-5px w-140px type="primary" html-type="submit">
          下一步
        </a-button>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<style lang="less" scoped></style>