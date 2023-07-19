/**
 * @params GET_QR_CODE 获取微信二维码接口
 * @params WATCH_SCAN 轮询接口监听用户是否扫码
 */
import type { IWechat } from '~/types/api';

export const GET_QR_CODE = async () => {
  return await useApi<IWechat>('/wxLogin/v1/login', { method: 'POST' });
};

export const WATCH_SCAN = async (ticket: string) => {
  return await useApi<string | null>('/wxLogin/v1/check_scan', {
    method: 'GET',
    params: { ticket },
  });
};

