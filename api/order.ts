import type { IWechatPay, IOrderState } from '~/types/api';

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
export const WECHAT_PAY = async function (options: {
  id: number;
  type: string;
}) {
  return await useApi<IWechatPay>('/order/v1/pay', {
    method: 'post',
    body: options,
  });
};

/**
 * 支付成功回调
 * @param outTradeNo 订单号
 */
export const PAY_CALLBACK = async (outTradeNo: string) => {
  return await useApi<IOrderState>('/order/v1/callback', {
    method: 'post',
    body: {
      out_trade_no: outTradeNo,
    },
  });
};

/**
 * 查询订单状态
 * @param outTradeNo 订单号
 */
export const QUERY_STATE = async (outTradeNo: string) => {
  return await useApi<IOrderState>('/order/v1/query_state', {
    params: {
      out_trade_no: outTradeNo,
    },
  });
};