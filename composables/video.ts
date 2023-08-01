/**
 * 视频
 */
import { QUERY_PAY } from '../api/order';
import { defineStore } from 'pinia';

export const useVideo = defineStore('video', () => {
  const videoInfor = reactive({
    orderState: false,
  });
  // 检查课程是否购买
  const checkPay = async (id: number) => {
    if ((await QUERY_PAY(id)).code == 0) {
      videoInfor.orderState = true;
    }
  };

  return {
    videoInfor,
    checkPay,
  };
});

