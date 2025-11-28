# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# 复制 package.json
COPY package.json package-lock.json* ./

# 安装依赖 (使用 npm install，不要 ci)
RUN npm install

# 复制源代码
COPY . .

# 构建应用
RUN npm run build

# Production stage - 使用 nginx 作为静态服务器
FROM nginx:alpine

# 复制 nginx 配置
COPY nginx.conf /etc/nginx/nginx.conf

# 从 builder 阶段复制构建结果
COPY --from=builder /app/dist /usr/share/nginx/html

# 暴露端口
EXPOSE 8080

# 启动 nginx
CMD ["nginx", "-g", "daemon off;"]