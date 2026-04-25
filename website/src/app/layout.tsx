import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import { Providers } from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Personal Homepage | Investing',
  description: 'Personal investment notes and thoughts.',
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
                  © {new Date().getFullYear()} 个人主页. 保留所有权利。
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
