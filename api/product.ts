import type { IPoductQuery, IVideoDitails, IlatestLearn } from '~/types/api'

/**
 * 根据分类ID获取数据
 * @param params page-分页 size-数量 cid-分类ID cpid-方向
 */
export const QUERY_PRODUCT_BY_CID = async function (params: {
  page: number
  size: number
  cid?: number
  cpid?: number
}) {
  return await useApi<IPoductQuery>('/product/v1/query_by_cid', {
    method: 'POST',
    body: params
  })
}

/**
 * 获取视频详情
 * @param id 视频id
 */
export const GET_VIDEO_DETAILS = async (id: number) => {
  return await useApi<IVideoDitails>('/product/v1/detail', {
    params: { id },
  });
};

/**
 * 最近在学
 * @param id 视频ID
 */
export const GET_LATEST_LEARN = async (id: number) => {
  return await useApi<IlatestLearn[]>('order/v1/latest', {
    params: { id },
  });
};