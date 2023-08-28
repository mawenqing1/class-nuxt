/**
 * pm2运行的配置文件
 */
module.exports = {
  apps: [
    {
      name: 'frontend-course-pc', // 项目名字
      exec_mode: 'cluster', // 生产模式
      instances: 'max', // 全功率运行
      env: {
        PORT: 3002, // 端口号
        NODE_ENV: 'production' // 环境变量
      },
      script: './.output/server/index.mjs' // 执行的入口文件
    }
  ]
}