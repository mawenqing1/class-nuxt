import { IUserInfo } from '~/types/api'

/**
 * 注册
 * @param options code: 短信验证码 phone: 手机号 
 */
export const USER_REGISTER = async function (options: { code: string, phone: string }) {
    return await useApi<{token: string}>('/user/v1/register', { method: 'POST', body: options })
}

export const USER_LOGIN = async function (options: { phone: string, code?: string, password?: string }) {
    return await useApi<{token: string}>('/user/v1/login', { method: 'POST', body: options })
}

export const CHANGE_PASSWORD = async function (options: { code: string, phone: string, password: string }) {
    return await useApi<{token: string}>('/user/v1/forget', { method: 'POST', body: options })
}

/**
 * 获取用户信息
 */
export const GET_USER_INFO = async function () {
    return await useApi<IUserInfo>('/user/v1/detail')
  }