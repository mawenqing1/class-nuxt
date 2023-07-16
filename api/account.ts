/**
 * 发送手机验证码
 * @param options code: 短信验证码 phone: 手机号 
 */
export const USER_REGISTER = async function (options: { code: string, phone: string }) {
    return await useApi('/user/v1/register', { method: 'POST', body: options })
}