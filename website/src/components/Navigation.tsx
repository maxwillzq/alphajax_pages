'use client'

import Link from 'next/link'
import { TrendingUp, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
                Homepage
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              {/* Investing */}
              <Link href="/tang-gu-lun-jin" className="text-sm font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400">
                Investing
              </Link>

              {/* Research */}
              <Link href="/ge-wu-zhi-zhi" className="text-sm font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400">
                Research
              </Link>

              {/* Calendar */}
              <Link href="/calendar" className="text-sm font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400">
                Calendar
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 focus:outline-none"
            >
              <span className="sr-only">打开主菜单</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
            <Link 
              href="/tang-gu-lun-jin" 
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
              onClick={() => setIsOpen(false)}
            >
              Investing
            </Link>

            <Link 
              href="/ge-wu-zhi-zhi" 
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
              onClick={() => setIsOpen(false)}
            >
              Research
            </Link>

            <Link 
              href="/calendar" 
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
              onClick={() => setIsOpen(false)}
            >
              Calendar
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
