# 第一阶段：构建阶段
# node:20-alpine 表示这是一个运行 Node.js 20 版本的轻量级 Alpine Linux 镜像。Alpine版 体积小、性能高效
FROM node:20-alpine AS build-stage

LABEL MAINTAINER="sam9029"

# 设置容器的工作目录为 /app
WORKDIR /app

# 安装依赖和构建项目
COPY package*.json ./
# 安装依赖
RUN npm install --registry=https://registry.npmmirror.com
# 把当前目录下的所有文件复制到容器的 /app 目录 （两个点之间有空格是因为它们分别代表源和目标路径）
COPY . .
# 构建
RUN npm run build

# 第二阶段：运行阶段
FROM nginx:alpine AS production-stage
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 9002