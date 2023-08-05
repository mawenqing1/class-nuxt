import type { IHotProduct } from '~/types/api';

/**
 * 获取热门商品榜数据
 */
export const getHotProduct = async function () {
  return await useApi<IHotProduct[]>('/rank/v1/hot_product');
};

