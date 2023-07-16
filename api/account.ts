/**
 * 注册
 * @param options code: 短信验证码 phone: 手机号 
 */
export const USER_REGISTER = async function (options: { code: string, phone: string }) {
    return await useApi<{token: string}>('/user/v1/register', { method: 'POST', body: options })
}