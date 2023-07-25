import { defineStore } from 'pinia';
import { GET_USER_INFO } from '~/api/account'
import { message } from 'ant-design-vue';

export const useUser = defineStore(
  'user',
  () => {
    const token = ref('');
    const isLogin = ref(false);
    const personalInfo = ref({
      id: null,
      username: '',
      head_img: '',
      phone: '',
      pwd: '',
      position: null,
      slogan: '',
      sex: '1',
      city: null,
      learn_time: null,
      openid: null,
    })

    //  切换登录状态
    const switchLoginState = async (_token: string) => {
      token.value = _token;
      await asyncUserInfo()
    };

    // 同步登录信息
    const asyncUserInfo = async () => {
      if (token.value === '') {
        isLogin.value = false
        return
      }
      const userInfo = (await GET_USER_INFO())
      if (userInfo.code === 0) {
        isLogin.value = true
        personalInfo.value = { ...userInfo.data }
      }
    }

    // 退出登录
    const logout = () => {
      clearInfo()
      message.success('退出登录成功！')
    }

    /**
     * 清空用户信息
     */
    const clearInfo = function () {
      token.value = ''
      isLogin.value = false
      personalInfo.value = {} as any
      // nextTick(() => navigateTo('/'))
    }
    return {
      token,
      isLogin,
      personalInfo,
      asyncUserInfo,
      switchLoginState,
      logout
    };
  },
  //持久化储存
  { persist: true }
);

