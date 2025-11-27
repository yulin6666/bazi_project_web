# ⚡ 快速开始指南

## 5分钟快速启动

### 1️⃣ 进入项目目录
```bash
cd bazi-app
```

### 2️⃣ 安装依赖
```bash
npm install
```

### 3️⃣ 启动开发服务器
```bash
npm run dev
```

### 4️⃣ 打开浏览器
访问 `http://localhost:3000`

---

## 🎯 第一次使用

1. **输入生日信息**
   - 选择出生年月日
   - 选择出生时间（精确到分钟）
   - 选择性别

2. **点击"开始排盘"**
   - 稍等片刻等待分析完成
   - 系统会显示加载动画

3. **查看详细结果**
   - 四柱八字详解
   - 五行分布分析
   - 大运流年预测
   - 命理解释和建议

---

## 📱 在其他设备上访问

### 从其他电脑或手机访问

```bash
# 查看本机IP
ifconfig | grep "inet " | grep -v 127.0.0.1

# 或在运行的终端中查看，通常显示为：
# Network:        http://your-ip:3000
```

然后在其他设备上访问：`http://your-ip:3000`

---

## 🔧 常见命令

```bash
# 开发模式启动
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start

# 检查代码规范
npm run lint

# 清除缓存后重新启动
rm -rf .next && npm run dev
```

---

## 🐛 遇到问题？

### 问题：端口3000已被占用

```bash
# 使用其他端口
npm run dev -- -p 3001
```

### 问题：样式显示不正确

```bash
# 清除Next.js缓存
rm -rf .next
npm run dev
```

### 问题：API请求失败

1. 检查网络连接
2. 查看浏览器控制台错误信息（F12）
3. 确认后端API服务在线：https://yulin15.zeabur.app

### 问题：模块找不到

```bash
# 重新安装依赖
rm -rf node_modules
npm install
```

---

## 📖 更详细的文档

- **完整设置指南**: 查看 `SETUP_GUIDE.md`
- **项目文档**: 查看 `bazi-app/README.md`
- **代码结构**: 查看 `bazi-app/src/` 目录

---

## 🚀 下一步

- 根据需要定制样式
- 修改公司/应用名称和描述
- 部署到生产环境（Vercel、Docker等）
- 集成更多易学分析功能

---

## 💡 提示

- 更新代码后无需重启，Next.js会自动热更新
- 按 `Ctrl + C` 停止开发服务器
- 使用 Chrome DevTools 调试（F12）
- 检查 `.env.local` 确保API配置正确

---

**祝你使用愉快！有问题欢迎反馈。** 🎉
