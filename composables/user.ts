import { defineStore } from 'pinia';

export const useUser = defineStore(
  'user',
  () => {
    const token = ref('');

    //  切换登录状态
    const switchLoginState = (_token: string) => {
      token.value = _token;
      console.log('token:', token);
    };
    return {
      token,
      switchLoginState,
    };
  },
  //持久化储存
  { persist: true }
);

