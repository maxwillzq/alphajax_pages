import Link from 'next/link'
import { getAllReports } from '@/lib/reports'
import { Calendar, TrendingUp, BookOpen, Clock, ArrowRight, ShieldCheck, Zap } from 'lucide-react'

export default function Home() {
  const dailyReports = getAllReports('daily').slice(0, 5)
  const weeklyReports = getAllReports('weekly').slice(0, 3)
  const latestReport = dailyReports[0]

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] dark:bg-indigo-500/5" />
        <div className="absolute top-[100px] right-[-100px] w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] dark:bg-emerald-500/5" />
      </div>

      <main className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative z-10 text-center mb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/50 px-4 py-1.5 text-sm font-semibold text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-400 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <BookOpen className="h-4 w-4" />
            <span>AlphaJAX | 个人量化思考</span>
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-7xl mb-8 leading-[1.1]">
            量化思维与 <br />
            <span className="bg-gradient-to-r from-amber-500 to-emerald-500 bg-clip-text text-transparent">
              市场洞察
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
            记录我使用量化模型与 AI 辅助进行市场分析的个人笔记。这里没有绝对的真理，只有持续的思考与复盘。
          </p>

          <div className="flex items-center justify-center gap-4">
            <Link
              href={latestReport ? `/reports/daily/${latestReport.slug}` : "/"}
              className="rounded-full bg-slate-900 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 active:scale-95 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
            >
              阅读最新笔记
            </Link>
            <div className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
              <ShieldCheck className="h-5 w-5 text-amber-500" />
              独立研究 · 仅供参考
            </div>
          </div>
        </div>

        {/* Featured Analysis Section */}
        {latestReport && (
          <div className="mb-24">
            <div className="flex items-center gap-2 mb-8">
              <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 px-4">
                精选洞察
              </h2>
              <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
            </div>

            <Link
              href={`/reports/daily/${latestReport.slug}`}
              className="group relative block rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:shadow-2xl hover:shadow-indigo-500/10 dark:border-slate-800 dark:bg-slate-900/50 backdrop-blur-sm sm:p-12"
            >
              <div className="lg:flex items-center justify-between gap-12">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-400 uppercase tracking-wider">
                      最新分析
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                      <Clock className="h-3.5 w-3.5" />
                      更新于 {latestReport.date}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400 transition-colors sm:text-4xl mb-6 leading-tight">
                    {latestReport.title}
                  </h3>
                  <div className="flex items-center gap-4 text-indigo-600 dark:text-indigo-400 font-bold">
                    了解更多 <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
                <div className="hidden lg:block w-[400px] h-[240px] rounded-2xl bg-gradient-to-br from-indigo-50 to-slate-50 dark:from-slate-800 dark:to-slate-900 border border-slate-100 dark:border-slate-800 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 transform -rotate-12">
                    <TrendingUp className="w-64 h-64 text-indigo-500" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent dark:from-slate-900/80" />
                </div>
              </div>
            </Link>
          </div>
        )}

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Daily Reports Section */}
          <section>
            <div className="flex items-center justify-between mb-10 border-b border-slate-200 dark:border-slate-800 pb-4">
              <h2 className="text-2xl font-bold flex items-center gap-3 text-slate-900 dark:text-white">
                <Calendar className="h-6 w-6 text-amber-500" />
                每日观察
              </h2>
              <Link href="/reports/daily" className="text-sm font-bold text-amber-600 hover:text-amber-500 dark:text-amber-400 flex items-center gap-1">
                浏览存档 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-6 text-2xl">
              {dailyReports.length > 0 ? (
                dailyReports.map((report) => (
                  <Link
                    key={report.slug}
                    href={`/reports/daily/${report.slug}`}
                    className="group flex items-center justify-between rounded-2xl border border-transparent p-4 transition-all hover:bg-white hover:border-slate-100 hover:shadow-xl dark:hover:bg-slate-900 dark:hover:border-slate-800"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400 transition-colors">
                        {report.title}
                      </h3>
                      <div className="mt-1 flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 font-medium">
                        <span>{report.date}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                        <span>每日情报</span>
                      </div>
                    </div>
                    <div className="rounded-xl bg-slate-100 p-2.5 text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 dark:bg-slate-800 dark:group-hover:bg-indigo-900/30 transition-all">
                      <Clock className="h-5 w-5" />
                    </div>
                  </Link>
                ))
              ) : (
                <p className="text-slate-500 dark:text-slate-400 italic">暂无每日观察。</p>
              )}
            </div>
          </section>

          {/* Weekly Reports Section */}
          <section>
            <div className="flex items-center justify-between mb-10 border-b border-slate-200 dark:border-slate-800 pb-4">
              <h2 className="text-2xl font-bold flex items-center gap-3 text-slate-900 dark:text-white">
                <BookOpen className="h-6 w-6 text-emerald-500" />
                每周深度
              </h2>
              <Link href="/reports/weekly" className="text-sm font-bold text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 flex items-center gap-1">
                浏览存档 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-6">
              {weeklyReports.length > 0 ? (
                weeklyReports.map((report) => (
                  <Link
                    key={report.slug}
                    href={`/reports/weekly/${report.slug}`}
                    className="group flex items-center justify-between rounded-2xl border border-transparent p-4 transition-all hover:bg-white hover:border-slate-100 hover:shadow-xl dark:hover:bg-slate-900 dark:hover:border-slate-800"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400 transition-colors">
                        {report.title}
                      </h3>
                      <div className="mt-1 flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 font-medium">
                        <span>{report.date}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                        <span>每周情报</span>
                      </div>
                    </div>
                    <div className="rounded-xl bg-slate-100 p-2.5 text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 dark:bg-slate-800 dark:group-hover:bg-emerald-900/30 transition-all">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                  </Link>
                ))
              ) : (
                <p className="text-slate-500 dark:text-slate-400 italic">暂无每周深度。</p>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
