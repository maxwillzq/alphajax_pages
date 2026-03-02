import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import { Providers } from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AlphaJAX 智能分析 | 专业股票分析平台',
  description: '由量化引擎和 AI 驱动的机构级市场分析报告。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className="h-full">
      <body className={`${inter.className} h-full bg-slate-50 antialiased dark:bg-slate-950`}>
        <div className="flex min-h-full flex-col">
          <Providers>
            <Navigation />
            <div className="flex-1">
              {children}
            </div>
          </Providers>
          <footer className="border-t border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  © {new Date().getFullYear()} AlphaJAX 市场智能. 保留所有权利。
                </p>
                <p className="mt-2 text-xs text-slate-400 dark:text-slate-500">
                  量化数据和 AI 分析仅供参考，不构成投资建议。
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
