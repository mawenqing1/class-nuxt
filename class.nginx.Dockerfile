FROM nginx:1.23.0-alpine

# -p 创建多个层级的目录，如果某个目录不存在就创建
RUN mkdir -p /etc/nginx/conf/ssl 

# 本地配置文件替换远程
ADD frontend/nginx.conf /etc/nginx/nginx.conf

# 本地SSL证书替换远程
ADD ssl/class.mawenqing.net.key /etc/nginx/conf/ssl/class.mawenqing.net.key
ADD ssl/class.mawenqing.net.pem /etc/nginx/conf/ssl/class.mawenqing.net.pem

# 开放端口
EXPOSE 80