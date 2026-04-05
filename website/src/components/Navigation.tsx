'use client'

import Link from 'next/link'
import { TrendingUp } from 'lucide-react'

export default function Navbar() {


  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="rounded-lg bg-indigo-600 p-1.5 text-white transition-transform group-hover:scale-110">
                <TrendingUp className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                AlphaJAX
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link href="/reports/daily" className="text-sm font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400">
                每日报告
              </Link>
              <Link href="/reports/weekly" className="text-sm font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400">
                每周分析
              </Link>
              <Link href="/" className="text-sm font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400">
                投资哲学
              </Link>
            </div>
          </div>


        </div>
      </div>
    </nav>
  )
}
