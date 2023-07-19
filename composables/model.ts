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

    const wxModel = ref(false) //微信登录框

    const changeToFinish = () => {
        registerModel.base = false;
        registerModel.finish = true;
    }

    return {
        registerModel,
        wxModel,
        changeToFinish
    }
});