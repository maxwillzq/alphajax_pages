import Link from 'next/link'
import { getAllReports } from '@/lib/reports'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export default function DailyReportsPage() {
  const reports = getAllReports('daily')

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <header className="mb-12 border-b border-slate-200 dark:border-slate-800 pb-8">
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold mb-4">
            <Calendar className="h-5 w-5" />
            每日情报
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
            每日复盘存档
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            浏览往期的每日量化分析和 AI 情报报告。
          </p>
        </header>

        <div className="space-y-6">
          {reports.length > 0 ? (
            reports.map((report) => (
              <Link
                key={report.slug}
                href={`/reports/daily/${report.slug}`}
                className="group block rounded-2xl border border-transparent bg-white p-6 transition-all hover:border-slate-100 hover:shadow-xl dark:bg-slate-900 dark:hover:border-slate-800"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400 transition-colors">
                      {report.title}
                    </h2>
                    <div className="mt-2 flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                      <Clock className="h-4 w-4" />
                      <span>{report.date}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                      <span>每日智库</span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-300 transition-transform group-hover:translate-x-2 group-hover:text-indigo-500" />
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center py-20 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800">
              <p className="text-slate-500 dark:text-slate-400 italic">暂无报告数据。</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
