import type { ITeacher } from '~/types/api'

/**
 * 获取讲师列表
 */
export const GET_TEACHER_LIST = async () =>{
  return await useApi<ITeacher[]>('/teacher/v1/list')
}
