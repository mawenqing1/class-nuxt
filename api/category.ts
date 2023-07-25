/**
 * 课程分类接口
 */
import type { ICategoryList } from '~/types/api'

export const GET_CATEGROY_LIST = async () => {
  return await useApi<ICategoryList[]>('/product/v1/category');
};
