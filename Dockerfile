# 使用官方 Node.js Slim 镜像 (基于 Debian，体积小)
FROM node:20-slim

# 设置工作目录
WORKDIR /app

# 安装系统依赖 (如果有需要)
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    curl \
    git \
    && rm -rf /var/lib/apt/lists/*

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 设置 npm registry 并使用淘宝镜像（可选，国内用户推荐）
RUN npm config set registry https://registry.npmjs.org/

# 安装依赖
RUN npm ci --only=production && npm cache clean --force

# 复制所有源代码
COPY . .

# 构建应用
RUN npm run build

# 暴露端口
EXPOSE 3000

# 健康检查
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/api/health || exit 1

# 启动应用
CMD ["npm", "start"]