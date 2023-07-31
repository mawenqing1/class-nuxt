import type { IPoductQuery } from '~/types/api'

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
