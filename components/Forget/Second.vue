<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { CHANGE_PASSWORD } from '@/api/account'
const { forgetModel, switchForget } = $(useModel())

const currentInfo = reactive({
  code: '',
  password: ''
})

const rules = {
  code: [{ required: true, message: '请输入短信验证码', trigger: 'blur' }],
  password: [{ required: true, message: '请输入新密码', trigger: 'blur' }]
}

const back = () => {
  switchForget()
}

const onFinish = async () => {
  const { code } = await CHANGE_PASSWORD({
    phone: forgetModel.phoneCache,
    code: currentInfo.code,
    password: currentInfo.password
  })
  if(code === 1) {
    message.success("修改成功")
    forgetModel.second = false;
  }
}
</script>

<template>
  <a-modal :footer="null" class="w-350px!" v-model:visible="forgetModel.second">
    <h2>重置密码</h2>
    <p text-12px mb-15px>验证码已发送</p>
    <a-form autocomplete="off" ref="formRef" :model="currentInfo" @finish="onFinish">
      <a-form-item name="code" :rules="rules.code">
        <a-input placeholder="请输入验证码" v-model:value="currentInfo.code" />
      </a-form-item>
      <a-form-item name="password" :rules="rules.password">
        <a-input-password placeholder="请输入新修改的密码" autoComplete="new-password" type="password" v-model:value="currentInfo.password" />
      </a-form-item>
      <a-form-item>
        <a-button block danger type="primary" html-type="submit"> 提交 </a-button>
      </a-form-item>
    </a-form>
    <a-button type="link" size="small" text-center w="100%" @click="back"> 返回上一步 </a-button>
  </a-modal>
</template>

<style lang="less" scoped></style>