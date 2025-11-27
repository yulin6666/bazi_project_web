# 🐳 Docker 部署指南

## 🚀 快速开始

### 本地测试（推荐）
```bash
# 1. 构建 Docker 镜像
docker build -t bazi-app .

# 2. 运行容器
docker run -d --name bazi-app -p 3000:3000 bazi-app

# 3. 访问应用
open http://localhost:3000
# 或者 http://your-server-ip:3000
```

### 使用 docker-compose（更便利）
```bash
# 1. 启动服务（后台运行）
docker-compose up -d

# 2. 查看日志
docker-compose logs -f

# 3. 停止服务
docker-compose down
```

## 📋 部署选项

### 1. 个人服务器（VPS/Linux）
```bash
# 在服务器上执行
ssh your-server

# 克隆你的仓库
git clone https://github.com/yulin6666/bazi_project_web.git
cd bazi_project_web

# 构建和运行
docker-compose up -d

# 设置自动重启
echo "@reboot cd /path/to/bazi_project_web && docker-compose up -d" | sudo crontab -
```

### 2. Docker Hub + 任何服务器
```bash
# 推送镜像到 Docker Hub
docker build -t your-username/bazi-app .
docker push your-username/bazi-app

# 在服务器上拉取和运行
docker run -d --name bazi-app --restart unless-stopped -p 3000:3000 your-username/bazi-app
```

### 3. 云平台部署

#### Docker 选项:
- [Railway.app](https://railway.app) - 免费部署，有 500MB 存储和 512MB 内存
- [Render.com](https://render.com) - 免费静态网站托管
- [Fly.io](https://fly.io) - 按需付费，按秒计费
- [Google Cloud Run](https://cloud.google.com/run) - Serverless 容器

#### Static Export 选项:
- GitHub Pages
- Surge.sh
- Zeit Now (static)

### 4. GitHub Actions 自动部署
1. Fork 你的仓库
2. 在仓库设置 -> Secrets 中添加：`DOCKER_USERNAME` 和 `DOCKER_PASSWORD`
3. 推送代码, GitHub Actions 会自动：
   - 构建 Docker 镜像
   - 推送到 Docker Hub
   - 通知部署（如果你配置了服务器）

## 🔒 环境变量

创建 `.env` 文件（如果需要特定的环境变量）：
```bash
# 可选 - 如果需要自定义环境变量
NEXT_PUBLIC_API_BASE_URL=http://your-api-server.com/api/v1
```

## 🌐 反向代理配置（可选）

如果你想用 Nginx：
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # SSL 配置（可选）
    # listen 443 ssl;
    # ssl_certificate /path/to/certificate.pem;
    # ssl_certificate_key /path/to/privatekey.pem;
}
```

## 🌍 可用平台

### 免费选项：
- **Railway.app** - 500MB 存储，512MB 内存
- **Fly.io** - 免费额度，按需付费
- **Google Cloud Run** - 免费配额
- **Heroku** - 已关闭免费层，不推荐

### 付费选项：
- **DigitalOcean Droplets** - $6/月 起步
- **AWS EC2** - 按秒计费，最低约 $3.5/月
- **Vultr / Linode** - $5-6/月
- **Azure App Service** - 免费层有 60 CPU 分钟/日

### 最佳性价比：
- **Railway.app** - 最推荐的免费选择
- **Google Cloud Run** - 按使用计费，非常适合
casual 应用

## 📖 步骤说明

### 1. 创建账户
- Railway.app： https://railway.app
- Render.com： https://render.com
- Fly.io： https://fly.io

### 2. 连接 GitHub
- 连接你的 GitHub 账户
- 选择 `yulin6666/bazi_project_web` 仓库

### 3. 配置环境
- 设置环境变量（可选）
- 选择 Node.js 20 版本
- 添加自定义域名（可选）

### 4. 部署
- 点击部署，等待完成
- 获得 final URL

## 🎯 推荐部署策略

### 有预算的：
1. **Railway.app** - 免费部署，获得 URL
2. **DigitalOcean Droplet** - $6/月，获得独立服务器

### 预算有限：
1. **Railway.app** - 免费，足够个人使用
2. **Google Cloud Run** - 按使用付费，非常便宜

### 生产环境：
1. **Docker + VPS** - $5/月，完全控制
2. **AWS ECS** - 企业级，按使用付费

## 📊 性能优化

### Docker 优化:
- 使用多阶段构建（减少镜像大小）
- 使用 Alpine Linux 基础镜像
- 正确清理缓存

### Node.js 优化:
- 设置合适的内存限制
- 使用 Clustering (如果需要)
- 使用 CDN 加速静态资源

## 🔧 故障排除

### Common Issues:

**权限问题：**
```bash
sudo usermod -aG docker $USER
sudo systemctl enable docker --now
```

**端口冲突：**
```bash
# 查看端口占用
sudo netstat -tulpn | grep :3000
# 杀死占用程序
sudo kill -9 PID
```

**内存问题：**
```bash
# 清理 Docker 资源
docker system prune -a
docker volume prune
```

## 🎉 下一步

选择你最喜欢的部署方式：

1. **立即开始** → Railway.app（最推荐）
2. **个人学习** → Railway.app 或 Docker
3. **小型生产环境** → Docker + VPS
4. **企业级** → Google Cloud Run 或 AWS ECS

**祝你部署成功！** 🎪✨

---

*有任何问题？告诉我你的选择，我可以给你更详细的指导！*