<script setup lang="ts">
import { message } from 'ant-design-vue'
import { UPDATE_USER_INFO } from '~/api/account.js'

let { personalInfo, asyncUserInfo } = $(useUser())

let formData = $ref({ ...personalInfo })

/**
 * 编辑
 */
let disabled = $ref(true)
const edit = () => {
  disabled = !disabled
}

/**
 * 保存
 */
const save = async () => {
  const data = await UPDATE_USER_INFO({ ...formData })
  if (data.code === 1) {
    disabled = !disabled
    await asyncUserInfo()
    formData = {
      ...formData,
      ...personalInfo
    }
    message.success('保存成功')
  }
}

/**
 * 取消
 */
const cancel = () => {
  disabled = !disabled
  Object.assign(formData, personalInfo)
}
</script>

<template>
  <div class="BasicInfor">
    <div class="username">
      <span>昵称</span>
      <input v-model="formData.username" :disabled="disabled" :class="[!disabled && 'notDisable']" />
    </div>
    <div class="sex">
      <span>性别</span>
      <span v-show="disabled">{{ ['女', '男'][formData.sex] }}</span>
      <a-radio-group v-model:value="formData.sex" v-show="!disabled">
        <a-radio :value="'1'">男</a-radio>
        <a-radio :value="'0'">女</a-radio>
      </a-radio-group>
    </div>
    <div class="city">
      <span>城市</span>
      <input v-model="formData.city" :disabled="disabled" :class="[!disabled && 'notDisable']" />
    </div>
    <div class="autograph">
      <span>签名</span>
      <input v-model="formData.slogan" :disabled="disabled" :class="[!disabled && 'notDisable']" />
    </div>
    <div class="button">
      <button class="btn border-none center-text-34 color-white w-100px" bg="#f38e48" @click="edit" v-show="disabled">编辑</button>
      <div v-show="!disabled">
        <button btn border-none text-14px color-white w-100px center-text-34 bg="#f38e48" @click="save">保存</button>
        <button btn border-none text-14px color-white w-100px center-text-34 ml-40px b="#f38e48" class="cancel" @click="cancel">
          取消
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.BasicInfor {
  margin-left: 40px;
  margin-top: 30px;

  .button {
    margin-left: 150px;
  }

  input {
    color: #555555;
    font-size: 16px;
    width: 240px;
    border: none;
    background-color: #fff !important;
  }

  span {
    color: #7f7f7f;
    font-size: 16px;
    margin-right: 130px;
  }

  .notDisable {
    padding: 0 10px;
    border-radius: 4px;
    border: 1px solid #d7d7d7;
  }

  &>div:not(:last-child) {
    margin-bottom: 46px;
  }
}
</style>
