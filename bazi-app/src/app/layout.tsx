import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '道家八字排盘 - 古老智慧，现代呈现',
  description: '专业的八字排盘分析工具，结合传统道家哲学生成详细的命理报告',
  keywords: '八字, 命理, 道家, 排盘, 五行, 纳音, 十神',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        <div id="modal-root" />
      </body>
    </html>
  )
}