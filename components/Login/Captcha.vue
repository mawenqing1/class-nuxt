<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { SEND_CODE } from '~/api/notify'
import { USER_LOGIN } from '~/api/account'

let { loginModel } = $(useModel())
let { switchLoginState } = $(useUser())

const formRef = ref(null)
const currentInfo = reactive({
  phone: '',
  code: '',
  captcha: ''
})

const rules = {
  phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
  captcha: [{ required: true, message: '请输入图形验证码', trigger: 'blur' }],
  code: [{ required: true, message: '请输入短信验证码', trigger: 'blur' }]
}

const captchaSrc = ref(`${baseUrl}/notify/v1/captcha?type=login&time=${Date.now()}`)
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

/**
 * 获取短信验证码
 */
const getCode = () => {
  formRef.value.validate(['phone', 'captcha']).then(async () => {
    //验证手机号
    if (currentInfo.phone) {
      const phoneReg = /^1[3-9][0-9]{9}$/
      if (!phoneReg.test(currentInfo.phone)) {
        message.error('请输入正确的手机号')
        return
      }
    }
    countBtn.disabled = true
    const { code, msg } = await SEND_CODE(currentInfo.phone, currentInfo.captcha, 'login')
    if (code === 1) {
      handleCountDown()
      message.success('验证码已发送，请注意查收')
    } else {
      resetCaptcha()
    }
  })
}

const onFinish = async () => {
  const {code, data} = await USER_LOGIN(currentInfo)
  if(code === 1) {
    message.success('登录成功')
    loginModel = false;
    switchLoginState(data.token)
  } else {
    message.error('登录失败')
  }
}

onBeforeMount(() => {
  clearInterval(countBtn.timer)
})

</script>

<template>
  <div>
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

      <!-- 手机验证码 -->
      <a-form-item name="code" :rules="rules.code">
        <a-input placeholder="请输入验证码" autoComplete="false" v-model:value="currentInfo.code">
          <template #suffix>
            <div>
              <a-button type="link" size="small" p-0 :disabled="countBtn.disabled" @click="getCode">
                {{ countBtn.disabled ? `${countBtn.countDown}s后重新发送` : '获取验证码' }}
              </a-button>
            </div>
          </template>
        </a-input>
      </a-form-item>

      <a-form-item>
        <div flex mt-2px text-10px>
          <p>登录即同意小卿课堂</p>
          <a ml-4px color="#169bd5" target="__blank">《隐私政策》</a>
        </div>
      </a-form-item>

      <a-form-item>
        <button type="submit" bg="#4d555d" class="rounded-full btn center-text-36 w-300px text-white">
          立即登录
        </button>
      </a-form-item>
    </a-form>
    <Bottom type='login' />
  </div>
</template>

<style lang="less" scoped></style>
