<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { SEND_CODE } from '~/api/notify'
import { USER_REGISTER } from '~/api/account'

const { wxModel, changeToFinish } = $(useModel())
const { registerForm } = defineProps<{ registerForm: { phone: string, code: string, captcha: string, accept: boolean } }>()

const captchaSrc = ref(`${baseUrl}/notify/v1/captcha?type=register&time=${Date.now()}`)
const countBtn = reactive({
  countDown: 60,
  disabled: false,
  timer: null
})

const resetCaptcha = () => {
  if (captchaSrc.value.includes('time')) {
    captchaSrc.value = captchaSrc.value.replace(/time=\d+/, `time=${Date.now()}`)
  } else {
    captchaSrc.value = `${captchaSrc.value}&time=${Date.now()}`
  }
}

/**
 * 获取短信验证码
 */
const getCode = async () => {
  //验证手机号
  if (registerForm.phone) {
    const phoneReg = /^1[3-9][0-9]{9}$/
    if (!phoneReg.test(registerForm.phone)) {
      message.error('请输入正确的手机号')
      return
    }
  } else {
    message.error('请输入手机号')
    return
  }

  //验证图形验证码
  if (!registerForm.captcha) {
    message.error('请输入图形验证码')
    return
  }
  const { code } = await SEND_CODE(registerForm.phone, registerForm.captcha, 'register')
  if (code === 1) {
    countBtn.disabled = true
    handleCountDown()
    message.success('验证码已发送，请注意查收')
  } else {
    resetCaptcha()
  }
}

const handleCountDown = () => {
  countBtn.timer = setInterval(() => {
    countBtn.countDown--
    if (countBtn.countDown <= 0) {
      clearInterval(countBtn.timer)
      countBtn.countDown = 60
      countBtn.disabled = false
    }
  }, 1000)
}

const onFinish = async () => {
  if (!registerForm.code) {
    message.error('请输入短信验证码')
    return
  }
  if (!registerForm.accept) {
    message.error('请同意隐私策略')
    return
  }

  const {code ,data} = await USER_REGISTER({phone: registerForm.phone, code: registerForm.code});
  if(code === 1) {
    changeToFinish()
    clearInfo()
    sessionStorage.setItem('CLASS_TOKEN', data.token)
  } else {
    resetCaptcha()
  }
}

const clearInfo = () => {
  registerForm.phone = ''
  registerForm.captcha = ''
  registerForm.code = ''
  registerForm.accept = false
  countBtn.countDown = 60
  countBtn.disabled = false
}

onBeforeMount(() => {
  clearInterval(countBtn.timer)
})

</script>

<template>
  <div mt-20px>
    <a-form autocomplete="off" ref="formRef" :model="registerForm" @finish="onFinish">
      <a-form-item name="reg">
        <a-input placeholder="请输入手机号" v-model:value="registerForm.phone" />
      </a-form-item>

      <!-- 图形验证码  -->
      <a-form-item name="regPCaptcha">
        <div flex>
          <a-input placeholder="请输入图形验证码" autoComplete="false" v-model:value="registerForm.captcha">
            <template #suffix>
              <reload-outlined mr-3px cursor-pointer @click="resetCaptcha" />
            </template>
          </a-input>
          <div class="captcha-box">
            <img :src="captchaSrc" />
          </div>
        </div>
      </a-form-item>

      <!-- 手机验证码  -->
      <a-form-item name="regCaptcha">
        <a-input placeholder="请输入短信验证码" v-model:value="registerForm.code">
          <template #suffix>
            <div>
              <a-button type="link" size="small" p0 :disabled="countBtn.disabled" @click="getCode">
                {{ countBtn.disabled ? `${countBtn.countDown}s后重新发送` : '获取验证码' }}
              </a-button>
            </div>
          </template>
        </a-input>
      </a-form-item>

      <!-- 同意协议  -->
      <div flex items-center justify-between>
        <a-form-item name="accept">
          <a-checkbox v-model:checked="registerForm.accept">
            <div flexc items-center text-13px>
              <div>同意小卿课堂</div>
              <a size="small" type="link" text-13px p0 m0 href="/" color="#169bd5">《隐私策略》</a>
            </div>
          </a-checkbox>
        </a-form-item>
      </div>

      <a-form-item>
        <button type="submit" btn center-text-36 w-300px rounded-full bg="#4d555d" text-white cursor-pointer>
          立即注册
        </button>
      </a-form-item>
    </a-form>

    <!-- 微信注册登录方式 -->
    <Bottom />
  </div>
</template>

<style lang="less" scoped>
:deep(.ant-form-item) {
  margin-bottom: 20px;
}

.captcha-box {
  border: 1px solid #d9d9d9;

  img {
    height: 32px;
  }
}
</style>
