# 🐉 道家八字排盘应用 - 完整设置指南

## 项目概述

**道家八字排盘**是一款现代化的命理分析应用，结合了传统道家/易学文化与现代Web技术，为用户提供专业的八字排盘和命理分析服务。

### 核心特性
- 🎯 **专业分析**: 基于传统易学理论的精准八字分析
- 🎨 **道家风格**: 传统中国风设计元素和美学
- ⚡ **高性能**: 基于Next.js的现代Web应用框架
- 📱 **响应式**: 完美支持桌面、平板和手机设备
- 🌍 **国际化**: 完全中文UI和文案

---

## 项目结构详解

```
bazi-app/
│
├── 📄 配置文件
│   ├── package.json              # 项目依赖和脚本
│   ├── tsconfig.json             # TypeScript编译配置
│   ├── next.config.js            # Next.js配置
│   ├── tailwind.config.js        # Tailwind CSS配置
│   ├── postcss.config.js         # PostCSS配置
│   ├── .eslintrc.json            # ESLint规则
│   └── .gitignore                # Git忽略文件
│
├── src/
│   ├── app/
│   │   ├── layout.tsx            # 根布局组件 (HTML结构)
│   │   ├── page.tsx              # 主页面 (应用入口)
│   │   ├── globals.css           # 全局样式表
│   │   │                          # - 自定义CSS变量
│   │   │                          # - Taoist样式定义
│   │   │                          # - 动画关键帧
│   │   │                          # - 中文文本样式
│   │   └── page.tsx              # 首页面
│   │
│   ├── components/
│   │   ├── BaziInputForm.tsx     # 用户输入表单组件
│   │   │                          # - 日期时间输入
│   │   │                          # - 性别选择
│   │   │                          # - 表单验证
│   │   ├── BaziResults.tsx       # 结果展示组件
│   │   │                          # - 四柱八字展示
│   │   │                          # - 五行分析表
│   │   │                          # - 大运流年预测
│   │   └── LoadingScreen.tsx     # 加载动画组件
│   │                              # - 太极阴阳动画
│   │                              # - 进度提示
│   │
│   ├── lib/
│   │   ├── api.ts                # API服务类
│   │   │                          # - 后端API调用
│   │   │                          # - 请求/响应处理
│   │   └── utils.ts              # 工具函数库
│   │                              # - 日期格式化
│   │                              # - 生肖计算
│   │                              # - 颜色映射
│   │
│   └── types/
│       └── bazi.ts               # TypeScript类型定义
│                                  # - API接口类型
│                                  # - 业务数据模型
│
├── public/
│   └── images/                   # 静态资源
│       └── (放置自定义图片)
│
└── 📄 文档文件
    ├── README.md                 # 项目说明文档
    ├── .env.local.example        # 环境变量示例
    └── SETUP_GUIDE.md            # 本文档
```

---

## 环境要求

### 系统要求
- **Node.js**: 18.17+ 或 20+
- **npm**: 8.0+ 或 **yarn**: 3.0+
- **操作系统**: macOS, Linux, Windows (WSL2推荐)

### 开发工具推荐
- **IDE**: Visual Studio Code
- **Extensions**:
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - TypeScript Vue Plugin
  - Prettier - Code formatter

---

## 安装步骤

### 1. 克隆或下载项目

```bash
# 如果使用git克隆
git clone <repository-url>
cd bazi-app

# 或者直接进入项目目录
cd /Users/linofficemac/Documents/AI/bazi_project_web/bazi-app
```

### 2. 安装依赖

```bash
# 使用npm
npm install

# 或者使用yarn
yarn install

# 或者使用pnpm
pnpm install
```

### 3. 配置环境变量

```bash
# 复制示例环境配置
cp .env.local.example .env.local

# 编辑 .env.local（如需要）
# 默认API地址已配置为：
# NEXT_PUBLIC_API_BASE_URL=https://yulin15.zeabur.app/api/v1
```

### 4. 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:3000` 查看应用。

---

## 开发工作流

### 文件修改后的实时更新
Next.js 提供了快速刷新功能，修改代码后浏览器会自动更新：

```bash
# 开发服务器会监听文件变化
# 保存文件后自动编译和刷新
npm run dev
```

### TypeScript 检查

```bash
# 构建时会自动检查类型
# 或者手动运行
npm run build
```

### ESLint 检查

```bash
# 检查代码规范
npm run lint
```

---

## 主要功能模块说明

### 1. BaziInputForm 输入表单

**位置**: `src/components/BaziInputForm.tsx`

**功能**:
- 收集用户生日信息
- 实时表单验证
- 显示验证错误提示

**表单字段**:
```
┌─────────────────────────────────────┐
│  出生年份 │ 出生月份 │ 出生日期    │
├─────────────────────────────────────┤
│  出生时辰 │ 出生分钟 │ 性别 (男/女)│
└─────────────────────────────────────┘
```

**表单验证规则**:
- 年份: 1900 - 当前年份
- 月份: 1 - 12
- 日期: 1 - 该月最后一日
- 时辰: 0 - 23
- 分钟: 0 - 59
- 日期必须在过去

### 2. LoadingScreen 加载动画

**位置**: `src/components/LoadingScreen.tsx`

**特点**:
- 旋转的太极阴阳符号
- 五行元素动画提示
- 进度条动画
- 古代智慧名言引用

### 3. BaziResults 结果展示

**位置**: `src/components/BaziResults.tsx`

**显示内容**:
1. **用户信息卡**: 阳历、农历、生肖、性别
2. **四柱八字**: 年、月、日、时柱的详细信息
3. **五行分析**: 金木水火土的数量分布
4. **起运信息**: 起运年月日和描述
5. **大运分析**: 10年一个周期的运程表
6. **流年分析**: 逐年的流年干支预测

---

## API 集成

### 后端接口信息

```
请求方式: POST
URL: https://yulin15.zeabur.app/api/v1/nlp/bazi
Content-Type: application/json
```

### 请求示例

```javascript
// JavaScript/TypeScript 示例
const response = await fetch('https://yulin15.zeabur.app/api/v1/nlp/bazi', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: '1990年5月15日14点30分，男'
  })
});
```

### 响应结构

```typescript
{
  status: 'success',
  parsed_input: {
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    gender: 0 | 1,
    options: string
  },
  bazi_analysis: {
    user_info: {
      阳历: string,
      农历: string,
      生肖: string,
      性别: string
    },
    bazi: {
      年柱: string,
      月柱: string,
      日柱: string,
      时柱: string
    },
    day_master: string,
    wuxing: {
      detail: {...},
      list: string[],
      counts: {金: number, 木: number, 水: number, 火: number, 土: number}
    },
    nayin: {...},
    shi_shen: {...},
    qi_yun: {...},
    da_yun: DaYun[],
    liu_nian: LiuNian[]
  },
  timestamp: string
}
```

---

## 样式系统

### CSS 自定义变量

在 `globals.css` 中定义:

```css
:root {
  --taoist-red: #8B0000;      /* 深红色 */
  --taoist-gold: #DAA520;     /* 金色 */
  --taoist-black: #1C1C1C;    /* 深黑色 */
  --taoist-white: #F8F8F8;    /* 象牙白 */
  --taoist-grey: #696969;     /* 灰色 */
}
```

### 自定义样式类

```css
.taoist-button      /* 道教风格按钮 */
.chinese-border     /* 中式边框装饰 */
.pattern-bg         /* 背景纹理 */
.paper-texture      /* 纸质纹理 */
.floating           /* 浮动动画 */
.chinese-text       /* 竖排文字 */
.loading-dots       /* 加载动点 */
```

### Tailwind CSS 扩展

在 `tailwind.config.js` 中添加了自定义：

```javascript
{
  colors: {
    taoist: {
      red: '#8B0000',
      gold: '#DAA520',
      black: '#1C1C1C',
      white: '#F8F8F8',
      grey: '#696969'
    }
  },
  animation: {
    'float': 'float 6s ease-in-out infinite',
    'fade-in': 'fade-in 1s ease-out',
  },
  keyframes: {
    float: {...},
    'fade-in': {...}
  }
}
```

---

## 性能优化建议

### 1. 构建优化

```bash
# 分析包大小
npm run build

# 输出显示每个路由的大小信息
```

### 2. 图像优化

- 使用 Next.js Image 组件替代 `<img>`
- 自动格式转换和响应式图片

### 3. 代码分割

- 动态导入大型组件
- 路由级别的代码分割

---

## 部署指南

### Vercel 部署（推荐）

1. **推送到 GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **在 Vercel 中导入项目**
   - 访问 https://vercel.com/new
   - 连接 GitHub 账户
   - 选择仓库
   - 点击 "Deploy"

3. **自动化部署**
   - 推送到 main 分支会自动部署
   - 拉取请求会生成预览链接

### 自托管部署 (Docker)

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

```bash
# 构建镜像
docker build -t bazi-app .

# 运行容器
docker run -p 3000:3000 bazi-app
```

### 生产环境检查清单

- [ ] 设置 `.env.production` 中的正确 API_BASE_URL
- [ ] 检查所有外部链接和API都正确配置
- [ ] 运行 `npm run build` 确保构建成功
- [ ] 测试所有用户流程
- [ ] 检查移动设备兼容性
- [ ] 配置适当的 CORS 策略
- [ ] 启用 HTTPS
- [ ] 配置 DNS 和域名

---

## 常见问题解决

### Q: 启动时出现 "模块未找到" 错误

```bash
# 解决方案：重新安装依赖
rm -rf node_modules package-lock.json
npm install
```

### Q: TypeScript 报错

```bash
# 重新生成 TypeScript 配置
npm run build
```

### Q: 样式不加载

```bash
# 清除 Next.js 缓存
rm -rf .next
npm run dev
```

### Q: API 请求超时或失败

检查:
1. 网络连接
2. 后端服务状态
3. .env.local 中的 API_BASE_URL 配置
4. 浏览器控制台的网络标签页

### Q: 生成的八字不正确

常见原因:
1. 时间输入不准确（生时）
2. 时区问题（应使用北京时间）
3. 后端服务版本不同

---

## 开发建议

### 代码规范

```typescript
// 使用 TypeScript 类型注解
function analyzeBazi(input: BaziInput): Promise<BaziResponse>

// 避免 any 类型
// 使用常量而不是魔法数字
const VALIDATION_RULES = {
  MIN_YEAR: 1900,
  MAX_YEAR: new Date().getFullYear(),
  MONTHS_IN_YEAR: 12
}
```

### 组件最佳实践

```typescript
// 使用 React 18 的客户端指令
'use client';

// 导出类型定义
interface ComponentProps {
  data: BaziResponse;
  onAction: () => void;
}

// 使用函数式组件
export default function Component({ data, onAction }: ComponentProps) {
  // 实现
}
```

### 错误处理

```typescript
try {
  const result = await BaziService.analyzeBazi(input);
} catch (error) {
  if (error instanceof Error) {
    setError(error.message);
  } else {
    setError('分析失败，请重试');
  }
}
```

---

## 扩展和定制

### 添加新的分析模块

1. 创建新的 TypeScript 类型
2. 在后端接口支持后，更新 API 服务
3. 创建新的展示组件
4. 集成到主页面

### 自定义样式

编辑 `globals.css` 和 `tailwind.config.js`：

```css
/* 添加自定义颜色 */
.bg-custom-taoist {
  background-color: var(--taoist-red);
}
```

### 添加多语言支持

```typescript
// 使用 next-i18next 或类似库
// 创建 i18n 配置
// 导出翻译字符串
```

---

## 技术栈详解

| 技术 | 版本 | 用途 |
|------|------|------|
| Next.js | 14.0.0 | Web 框架 |
| React | 18+ | UI 库 |
| TypeScript | 5+ | 类型安全 |
| Tailwind CSS | 3.3.0 | 样式框架 |
| PostCSS | 8+ | CSS 处理 |

---

## 性能指标

运行 `npm run build` 后的输出：

```
Route (app)           Size      First Load JS
├ ○ /                9.78 kB   97.5 kB
└ ○ /_not-found      875 B     88.6 kB

✓ 所有页面预渲染为静态 HTML
✓ 最小化 JavaScript 包大小
✓ 优化的图像和资源
```

---

## 获取帮助

### 调试技巧

1. **浏览器开发者工具**
   - F12 打开开发者工具
   - Console 标签查看错误
   - Network 标签监控 API 请求

2. **Next.js 调试**
   ```bash
   # 启用调试日志
   DEBUG=* npm run dev
   ```

3. **TypeScript 验证**
   ```bash
   # 检查类型错误
   npx tsc --noEmit
   ```

### 参考资源

- [Next.js 官方文档](https://nextjs.org/docs)
- [React 官方文档](https://react.dev)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [TypeScript 文档](https://www.typescriptlang.org/docs)

---

## 许可证

MIT License - 自由使用、修改和分发

## 致谢

感谢所有开源项目的贡献者，特别是 Next.js、React 和 Tailwind CSS 的开发团队。

---

**最后更新**: 2024-11-27
**文档版本**: 1.0
**适用版本**: bazi-app v1.0+
