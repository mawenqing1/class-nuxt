<script setup lang="ts">
let { registerModel, wxModel, loginModel } = $(useModel())
const { personalInfo, isLogin, logout } = $(useUser())

const registerForm = reactive({
  phone: '',
  captcha: '',
  code: '',
  accept: false,
})

const onCancel = () => {
  registerForm.phone = '';
  registerForm.captcha = '';
  registerForm.code = '';
  registerForm.accept = false;
}

const handleLogin = () => {
  loginModel = true;
}

const userLogout = function () {
  logout()
}

</script>

<template>
  <div class="header-container">
    <div class="header">
      <div class="center-tab">
        <NuxtLink class="logo" to="/">
          <span text-20px font-600>小卿课堂</span>
        </NuxtLink>
        <NuxtLink to="/">首页</NuxtLink>
        <NuxtLink to="/videoListPage">课程中心</NuxtLink>
        <a target="_blank">云服务器</a>
      </div>
      <HeaderSearch />
      <NuxtLink to="/personal" ml-20px>个人中心</NuxtLink>
      <div>
        <div v-if="isLogin" flexc>
          <a-dropdown>
            <div relative>
              <a-avatar :size="50" :src="personalInfo.head_img" />
            </div>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <span text-center>{{ personalInfo.username }}</span>
                </a-menu-item>
                <a-menu-item>
                  <span text-center @click="userLogout()">退出登录</span>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
        <div v-else class="login-or-registry" flexc>
          <span mr-8 @click="handleLogin">登录</span>
          <span class="register" @click="registerModel.base = true">
            注册
          </span>
        </div>
      </div>
    </div>
    <RegModal @cancel="onCancel">
      <WechatCode v-if="wxModel" />
      <RegisterBase v-else :registerForm="registerForm"></RegisterBase>
    </RegModal>
    <RegisterFinish></RegisterFinish>
  </div>
  <Login />
  <Forget />
</template>

<style lang="less" scoped>
.register {
  background-color: #4d555d;
  padding: 2px;
  width: 60px;
  height: 30px;
  color: white;
  text-align: center;
  line-height: 26px;
}

.header-container {
  display: flex;
  flex-basis: 1200px;
  min-width: 1200px;
  height: 67px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0px 0px 5px 0px #d7d7d7;
}

.header {
  flex-basis: 1200px;
  display: flex;
  height: 72px;
  align-items: center;
  font-size: 16px;
  justify-content: space-between;

  .center-tab {
    flex: 0.6;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: #4f555d;

    &:hover {
      color: #f38e48;
    }
  }

  .active {
    color: orange;
  }

  &>* {
    cursor: pointer;
    user-select: none;
  }

  .logo img {
    width: 138px;
    height: 63px;
    line-height: 62px;
    font-size: 0;
  }
}
</style>