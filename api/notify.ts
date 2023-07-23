/**
 * 发送手机验证码
 * @param phone 手机号
 * @param type 场景  1:注册 2:登录
 * @param captcha 图形验证码
 */
export const SEND_CODE = async function (phone: string, captcha: string, type: 'register' | 'login' | 'change') {
    return await useApi<null>('/notify/v1/sendCode', { method: 'POST', body: { phone, type, captcha } })
}