<script lang="ts" setup>
import { USER_LOGIN } from '~/api/account'
import { message } from 'ant-design-vue'

let { loginModel, changeToForget } = $(useModel())
let { switchLoginState } = $(useUser())

const currentInfo = reactive({
  phone: '',
  password: ''
})

const rules = {
  phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
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
</script>

<template>
  <div>
    <a-form autocomplete="off" ref="formRef" :model="currentInfo" @finish="onFinish">
      <a-form-item name="phone" :rules="rules.phone">
        <a-input placeholder="请输入手机号" v-model:value="currentInfo.phone" />
      </a-form-item>
      <a-form-item name="password" :rules="rules.password">
        <a-input-password type="password" placeholder="请输入密码" autoComplete="false" v-model:value="currentInfo.password" />
      </a-form-item>
      <div flexb>
        <a-form-item>
          <div flex flexc mt-2px text-10px>
            <p mb-0px>登录即同意小卿课堂</p>
            <a ml-4px color="#169bd5" target="__blank">《隐私政策》</a>
          </div>
        </a-form-item>

        <a-form-item>
          <div cursor-pointer text-center text-12px color="#555555" @click="changeToForget">忘记密码</div>
        </a-form-item>
      </div>
      <a-form-item>
        <button type="submit" bg="#4d555d" class="rounded-full btn center-text-36 w-300px text-white">
          立即登录
        </button>
      </a-form-item>
    </a-form>
    <Bottom type='login' />
  </div>
</template>