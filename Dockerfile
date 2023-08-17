FROM node:16-alpine

#复制文件
RUN mkdir /app
ADD frontend-class/ /app
WORKDIR /app

# 安装
RUN npm set registry https://registry.npmmirror.com
RUN yarn install
RUN yarn build
RUN npm i pm2 -g

# 启动
EXPOSE 3002
# docker中监测不到pm2后台运行，需要用pm2-runtime命令运行
CMD ["pm2-runtime","start","ecosystem.config.js"]