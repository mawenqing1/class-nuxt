import { IUserInfo, IPage, IPlayRecord } from '~/types/api'

/**
 * 注册
 * @param options code: 短信验证码 phone: 手机号 
 */
export const USER_REGISTER = async function (options: { code: string, phone: string }) {
    return await useApi<{ token: string }>('/user/v1/register', { method: 'POST', body: options })
}

export const USER_LOGIN = async function (options: { phone: string, code?: string, password?: string }) {
    return await useApi<{ token: string }>('/user/v1/login', { method: 'POST', body: options })
}

export const CHANGE_PASSWORD = async function (options: { code: string, phone: string, password: string }) {
    return await useApi<{ token: string }>('/user/v1/forget', { method: 'POST', body: options })
}

/**
 * 获取用户信息
 */
export const GET_USER_INFO = async function () {
    return await useApi<IUserInfo>('/user/v1/detail')
}

/**
 * 获取最近播放记录数据
 * @param params size: 每页条数, page: 页码
 */
export const GET_PLAY_RECORD = async function (params: {
    page: number;
    size: number;
}) {
    return await useApi<IPage<IPlayRecord>>('/user/v1/play_record', {
        method: 'post',
        body: params,
    });
};

/**
 * 修改个人信息
 */
export const UPDATE_USER_INFO = async function (params: any) {
    return await useApi<null>('/user/v1/update', {
        method: 'POST',
        body: params,
    });
};

/**
 * 上报学习时长
 * @param params 请求参数 productId-视频ID episodeId-集ID duration-视频时长
 */
export const ADD_DURATION = async function (params: {
    productId: number;
    episodeId: number;
    duration: number;
}) {
    return await useApi<null>('/user/v1/duration_record', {
        method: 'POST',
        body: params,
    });
};