import { getReportBySlug, getAllReports } from '@/lib/reports'
import ReactMarkdown from 'react-markdown'
import { notFound } from 'next/navigation'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import { Metadata } from 'next'

export async function generateStaticParams() {
  const reports = getAllReports('weekly')
  return reports.map((report) => ({
    slug: report.slug.split('/'),
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>
}): Promise<Metadata> {
  const { slug } = await params
  const report = getReportBySlug('weekly', slug.join('/'))

  if (!report) {
    return {
      title: 'Report Not Found',
    }
  }

  return {
    title: `${report.title} | AlphaJAX Weekly Report`,
    description: `AlphaJAX Weekly Momentum Scan and AI Analysis for ${report.date}. ${report.title}`,
  }
}

export default async function WeeklyReportPage({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug } = await params
  const report = getReportBySlug('weekly', slug.join('/'))

  if (!report) {
    notFound()
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <article className="prose prose-slate lg:prose-lg mx-auto dark:prose-invert">
        <header className="mb-8 border-b pb-8 text-center">
          <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 mb-4">
            每周报告
          </span>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {report.title}
          </h1>
          <p className="text-lg font-medium text-slate-500 dark:text-slate-400">
            {report.date}
          </p>
        </header>
        <div className="ql-editor">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, [remarkToc, { heading: '目录', tight: true, maxDepth: 2 }]]}
            rehypePlugins={[rehypeSlug]}
            components={{
              img: ({ node, ...props }) => {
                const userPath = slug.slice(0, -1).join('/')
                const prefix = `/weekly/${userPath}`
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
            {report.content.replace(/^#\s+.+\n?/, '').replace(/\[TOC\]/gi, '## 目录')}
          </ReactMarkdown>
        </div>
      </article>

    </div>
  )
}
