import type { IWechatPay } from '~/types/api';

/**
 * 根据订单ID查询订单是否被购买过
 * @param id 商品订单id
 */
export const QUERY_PAY = async function (id: number) {
  return await useApi<null>('/order/v1/query_pay', { params: { id } });
};

/**
 * 获取课程的支付二维码
 * @param options 场景：type 课程：id
 */
export const wechatPay = async function (options: {
  id: number;
  type: string;
}) {
  return await useApi<IWechatPay>('/order/v1/pay', {
    method: 'post',
    body: options,
  });
};