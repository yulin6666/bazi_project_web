# 🐳 Docker 快速启动指南

## 本地构建和测试

### 步骤 1：构建 Docker 镜像

```bash
cd /Users/linofficemac/Documents/AI/bazi_project_web

# 构建镜像
docker build -t bazi-app:latest .

# 查看构建过程（如果出错）
docker build -t bazi-app:latest . --progress=plain
```

### 步骤 2：运行容器

```bash
# 方式 1：在前台运行（可以看到日志）
docker run -p 3000:3000 bazi-app:latest

# 方式 2：在后台运行
docker run -d --name bazi-app -p 3000:3000 bazi-app:latest

# 查看日志
docker logs -f bazi-app

# 停止容器
docker stop bazi-app
docker rm bazi-app
```

### 步骤 3：访问应用

打开浏览器访问：**http://localhost:3000**

---

## 使用 docker-compose（推荐）

### 启动

```bash
# 启动服务
docker-compose up -d

# 查看日志
docker-compose logs -f

# 访问：http://localhost:3000
```

### 停止

```bash
docker-compose down
```

---

## 常见错误

### ❌ `docker: command not found`

**解决**：安装 Docker Desktop
- Mac/Windows: https://www.docker.com/products/docker-desktop
- Linux: `curl https://get.docker.com | sh`

### ❌ `failed to solve: process returned non-zero code: 1`

**可能原因**：npm 安装失败
**解决**：
```bash
# 清除 Docker 缓存
docker system prune -a
docker volume prune

# 重新构建
docker build -t bazi-app:latest . --no-cache
```

### ❌ `Error response from daemon: bind: address already in use`

**原因**：端口 3000 已被占用
**解决**：
```bash
# 使用不同的端口
docker run -p 8080:3000 bazi-app:latest
# 然后访问 http://localhost:8080
```

---

## 部署到云平台

### Railway.app（推荐，最简单）

1. 访问 https://railway.app
2. 点击 "Deploy"
3. 选择 "Deploy from GitHub"
4. 选择你的仓库
5. 它会自动检测到 Dockerfile 并部署

**完成！** 几分钟后就有一个公开的 URL。

---

### Google Cloud Run

```bash
# 1. 创建项目
gcloud auth login
gcloud config set project YOUR_PROJECT_ID

# 2. 构建并推送到 Google Container Registry
gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/bazi-app

# 3. 部署到 Cloud Run
gcloud run deploy bazi-app \
  --image gcr.io/YOUR_PROJECT_ID/bazi-app \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated

# 获得 URL 后访问即可
```

---

### Docker Hub + 任何服务器

```bash
# 1. 构建
docker build -t your-username/bazi-app .

# 2. 推送到 Docker Hub
docker tag bazi-app:latest your-username/bazi-app:latest
docker push your-username/bazi-app:latest

# 3. 在任何有 Docker 的服务器上运行
docker run -d --name bazi-app --restart unless-stopped -p 3000:3000 your-username/bazi-app:latest
```

---

## 性能优化

### 减小镜像大小

```bash
# 查看镜像大小
docker images | grep bazi-app

# 使用多阶段构建（已在 Dockerfile 中）
# 这会显著减小最终镜像大小
```

### 构建优化

```bash
# 添加 .dockerignore 文件
echo "node_modules
.next
.git
dist
.env.local
npm-debug.log" > .dockerignore

# 重新构建
docker build -t bazi-app:latest .
```

---

## 后台运行和管理

### 创建容器别名（Linux/Mac）

```bash
# 添加到 ~/.bashrc 或 ~/.zshrc
alias bazi-start='docker run -d --name bazi-app -p 3000:3000 bazi-app:latest'
alias bazi-stop='docker stop bazi-app && docker rm bazi-app'
alias bazi-logs='docker logs -f bazi-app'
alias bazi-build='docker build -t bazi-app:latest .'

# 然后就可以使用
bazi-build
bazi-start
bazi-logs
bazi-stop
```

---

## 监控和调试

### 查看容器状态

```bash
docker ps
docker ps -a  # 包括已停止的容器
```

### 进入容器

```bash
docker exec -it bazi-app /bin/sh
# 或者
docker exec -it bazi-app bash
```

### 检查容器日志

```bash
docker logs bazi-app
docker logs --tail 100 bazi-app  # 最后 100 行
docker logs -f bazi-app  # 实时日志
```

### 查看容器资源使用

```bash
docker stats bazi-app
```

---

## 生产部署清单

- [ ] 镜像已构建并测试
- [ ] 已将 Dockerfile 提交到 GitHub
- [ ] 已测试健康检查端点
- [ ] 已设置适当的环境变量（如需要）
- [ ] 已配置日志输出
- [ ] 已设置自动重启策略
- [ ] 已设置备份和恢复计划
- [ ] 已配置监控告警

---

## 快速参考命令

```bash
# 构建
docker build -t bazi-app .

# 运行
docker run -p 3000:3000 bazi-app

# 后台运行
docker run -d --name bazi-app -p 3000:3000 bazi-app

# 查看日志
docker logs -f bazi-app

# 停止
docker stop bazi-app

# 删除
docker rm bazi-app

# 清理
docker system prune -a

# 使用 compose
docker-compose up -d
docker-compose logs -f
docker-compose down
```

---

## 获取帮助

- Docker 官方文档：https://docs.docker.com
- Docker Hub：https://hub.docker.com
- Railway 文档：https://docs.railway.app

---

**祝你的应用顺利上线！** 🚀✨