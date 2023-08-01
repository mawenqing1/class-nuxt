/**
 * 笔记和网盘的存储
 */
import { defineStore } from 'pinia';
import { GET_VIDEO_MATERIALS } from '~/api/product';

export const useMaterials = defineStore(
  'materials',
  () => {
    const materialsInfor = reactive({
      bdZipUrl: '',
      noteUrl: '',
    });

    /**
     * 改变header title
     */
    const GET_VIDEO_MATERIALSData = async function (id: number) {
      const { isLogin } = $(useUser());
      if (!isLogin) return;
      const res = await GET_VIDEO_MATERIALS(id);
      materialsInfor.bdZipUrl = res.data?.bd_zip_url;
      materialsInfor.noteUrl = res.data?.note_url;
    };

    const clearInfo = function () {
      materialsInfor.bdZipUrl = '';
      materialsInfor.noteUrl = '';
    };

    return {
      clearInfo,
      GET_VIDEO_MATERIALSData,
      ...toRefs(materialsInfor),
    };
  },
  //持久化储存
  { persist: true }
);

