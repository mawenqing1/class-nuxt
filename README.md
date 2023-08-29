# 小卿课堂Nuxt服务端渲染  

> 小卿课堂是一款在线视频学习平台，满足视频播放、弹幕、排行榜等需求，支持第三方微信登录，服务端渲染。

### 安装

```shell
# yarn
yarn install
```

### 启动开发服务器

开发服务器默认启动在`http://localhost:3000`
生产服务器端口启动在`3002`

```shell
npm run dev
```

### 打包生产环境

将你的代码进行打包

```shell
npm run build
```

预览生产环境项目

```shell
npm run preview
```

### docker部署  

```shell
#删除上⼀次构建的镜像
docker stop backend-course || true
docker rm backend-course || true
docker rmi backend-course-image || true
#打包构建
docker build -f Dockerfile . -t backend-course-image
docker-compose -f docker-compose.yml up -d
```