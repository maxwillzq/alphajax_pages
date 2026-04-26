import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const DOCS_PATH = path.join(process.cwd(), 'public')

export interface Report {
  slug: string
  date: string
  type: 'investing'
  content: string
  title: string
}

function getFilesRecursively(dir: string, baseDir: string): string[] {
  let results: string[] = []
  if (!fs.existsSync(dir)) return results

  const list = fs.readdirSync(dir)
  list.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(filePath, baseDir))
    } else if (file.endsWith('.md') && file !== 'index.md') {
      const relPath = path.relative(baseDir, filePath)
      results.push(relPath.replace(/\.md$/, ''))
    }
  })
  return results
}

export function getReportBySlug(type: 'investing', slug: string): Report | null {
  try {
    const fullPath = path.join(DOCS_PATH, type, `${slug}.md`)
    if (!fs.existsSync(fullPath)) return null

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Extract date from filename if not in frontmatter
    const slugParts = slug.split('/')
    const filename = slugParts[slugParts.length - 1]
    const dateMatch = filename.match(/\d{4}-\d{2}-\d{2}/)
    const fallbackDate = dateMatch ? dateMatch[0] : slug

    return {
      slug,
      date: data.date || fallbackDate,
      type,
      content,
      title: data.title || `Investing Report - ${filename}`
    }
  } catch (e) {
    return null
  }
}

export function getAllReports(type: 'investing') {
  const reportsPath = path.join(DOCS_PATH, type)
  const slugs = getFilesRecursively(reportsPath, reportsPath)

  return slugs.map(slug => {
    return getReportBySlug(type, slug)
  }).filter((r): r is Report => r !== null)
    .sort((a, b) => b.date.localeCompare(a.date))
}
