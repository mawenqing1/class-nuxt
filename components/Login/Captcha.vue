<script lang="ts" setup>
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

const captchaSrc = ref(`http://127.0.0.1:8081/api/notify/v1/captcha?type=login&time=${Date.now()}`)

const resetCaptcha = () => {
  if (captchaSrc.value.includes('time')) {
    captchaSrc.value = captchaSrc.value.replace(/time=\d+/, `time=${Date.now()}`)
  } else {
    captchaSrc.value = `${captchaSrc.value}&time=${Date.now()}`
  }
}

const onFinish = () => {
  console.log('finish')
}

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
              <a-button type="link" size="small" p-0>
                获取验证码
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
