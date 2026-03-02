import { getReportBySlug, getAllReports } from '@/lib/reports'
import ReactMarkdown from 'react-markdown'
import { notFound } from 'next/navigation'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'

export async function generateStaticParams() {
  const reports = getAllReports('daily')
  return reports.map((report) => ({
    slug: report.slug.split('/'),
  }))
}

export default async function DailyReportPage({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug } = await params
  const report = getReportBySlug('daily', slug.join('/'))

  if (!report) {
    notFound()
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <article className="prose prose-slate lg:prose-lg mx-auto dark:prose-invert">
        <header className="mb-8 border-b pb-8 text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {report.title}
          </h1>
          <time className="text-lg font-medium text-slate-500 dark:text-slate-400">
            {new Date(report.date).toLocaleDateString('zh-CN', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </header>
        <div className="ql-editor">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, [remarkToc, { heading: '目录', tight: true }]]}
            rehypePlugins={[rehypeSlug]}
            components={{
              img: ({ node, ...props }) => {
                const userPath = slug.slice(0, -1).join('/')
                const prefix = `/daily/${userPath}`
                const cleanPrefix = prefix.endsWith('/') ? prefix : `${prefix}/`
                const src = props.src as string | undefined
                const fullSrc = src?.startsWith('http') || src?.startsWith('/')
                  ? src
                  : `${cleanPrefix}${src}`

                return (
                  <span className="block my-10">
                    <img
                      {...props}
                      src={fullSrc}
                      className="rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 mx-auto max-w-full"
                      alt={props.alt || '报告图表'}
                    />
                  </span>
                )
              }
            }}
          >
            {report.content.replace(/\[TOC\]/gi, '## 目录')}
          </ReactMarkdown>
        </div>
      </article>

      {/* TODO: Add CommentSection component once DB is ready */}
      <section className="mt-16 border-t pt-12">
        <h2 className="mb-8 text-2xl font-bold text-slate-900 dark:text-white">
          评论
        </h2>
        <div className="rounded-xl bg-slate-50 p-6 dark:bg-slate-900">
          <p className="text-slate-600 dark:text-slate-400 italic">
            正在进行数据库维护，评论功能暂时不可用。
          </p>
        </div>
      </section>
    </div>
  )
}
