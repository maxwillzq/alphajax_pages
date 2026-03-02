import Link from 'next/link'
import { getAllReports } from '@/lib/reports'
import { BookOpen, TrendingUp, ArrowRight } from 'lucide-react'

export default function WeeklyReportsPage() {
  const reports = getAllReports('weekly')

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <header className="mb-12 border-b border-slate-200 dark:border-slate-800 pb-8">
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold mb-4">
            <BookOpen className="h-5 w-5" />
            每周分析
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
            高置信度分析存档
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            浏览往期的每周深度深度分析和 AI Alpha 策略报告。
          </p>
        </header>

        <div className="grid gap-6">
          {reports.length > 0 ? (
            reports.map((report) => (
              <Link
                key={report.slug}
                href={`/reports/weekly/${report.slug}`}
                className="group block rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:border-emerald-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-700"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400">
                        每周 Alpha
                      </span>
                      <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
                        {report.date}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400 transition-colors">
                      {report.title}
                    </h2>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-3 text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 dark:bg-slate-800 dark:group-hover:bg-emerald-900/40 transition-all">
                    <TrendingUp className="h-6 w-6" />
                  </div>
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
