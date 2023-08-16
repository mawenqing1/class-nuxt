import { message } from 'ant-design-vue';

export default defineNuxtRouteMiddleware((to, from) => {
  const { isLogin } = $(useUser());
  const { changeToLogin } = $(useModel());
  // 需要权限的页面
  const authPath = ['payPage', 'personal', 'videoPlayPage'];
  // 如果用户没有登陆情况下访问了有权限的页面就提示登录
  if (
    authPath.filter((item) => to.fullPath.includes(item)).length > 0 &&
    !isLogin
  ) {
    changeToLogin();
    message.warn('请先登录！');
    if (from.fullPath === to.fullPath) return '/';
    return from;
  }
});
