/**
 * 全局模块态框控制
 */
import { defineStore } from "pinia";

export const useModel = defineStore("model", () => {
    //注册框展示
    const registerModel = reactive({
        base: false, //注册初始页
        finish: false, //注册完成页
    })

    // 忘记密码框
    const forgetModel = reactive({
        first: false,
        second: false,
        phoneCache: '' 
    });

    const wxModel = ref(false) //微信登录框
    const loginModel = ref(false) //登录弹窗

    /**
     * 注册成功后切换到注册完成页
     */
    const changeToFinish = () => {
        registerModel.base = false;
        registerModel.finish = true;
    }

    /**
     * 打开忘记密码弹窗
     */
    const changeToForget = () => {
        loginModel.value = false;
        forgetModel.first = true;
    };

    /**
     * 切换忘记密码（修改密码）到第二步骤（接受验证码）
     */
    const switchForget = () => {
        forgetModel.first = !forgetModel.first;
        forgetModel.second = !forgetModel.second;
    };

    return {
        registerModel,
        wxModel,
        loginModel,
        forgetModel,
        changeToFinish,
        changeToForget,
        switchForget
    }
});