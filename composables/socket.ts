/**
 * 弹幕逻辑配置
 */
import { io } from 'socket.io-client';
import { defineStore } from 'pinia';

export const useSocket = defineStore('socket', () => {
  // 弹幕实例变量名
  let socket = $ref(null);
  // 发送的弹幕
  let videoDanmuList = $ref([]);
  const initialize = () => {
    // 建立传输链接 http://127.0.0.1:8081
    socket = io('wss://class-server.mawenqing.net', {
      reconnectionDelay: 5000,
      reconnectionDelayMax: 10000,
      transports: ['websocket', 'polling']
    });
    socket.on('connect', () => {
      console.log('socketio已连接');
    });
    onBulletChat();
  };

  // 发送弹幕事件
  const handleAddDanmu = (data: any) => {
    socket.emit('bulletChat', data);
  };

  // 监听bulletChat事件
  const onBulletChat = () => {
    socket.on('message', (data) => {
      videoDanmuList.push(data);
    });
  };

  return {
    videoDanmuList,
    initialize,
    handleAddDanmu,
  };
});

