import type { ICard } from '~/types/api'

/**
 * 获取卡片列表
 */
export const GET_CARD_LIST = async function () {
  return await useApi<ICard>('/product/v1/card')
}

