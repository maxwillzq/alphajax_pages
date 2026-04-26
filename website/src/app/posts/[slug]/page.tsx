import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import matter from 'gray-matter';
import 'katex/dist/katex.min.css';

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Try to find the file in investing or research folders
  let filePath = '';
  const investingPath = path.join(process.cwd(), 'public/investing', `${slug}.md`);
  const researchPath = path.join(process.cwd(), 'public/research', `${slug}.md`);
  
  if (fs.existsSync(investingPath)) {
    filePath = investingPath;
  } else if (fs.existsSync(researchPath)) {
    filePath = researchPath;
  }
  
  if (!filePath) {
    return (
      <div className="min-h-screen bg-white text-slate-900 p-6 flex flex-col items-center justify-center">
        <p className="text-lg text-slate-500 mb-4">Post not found</p>
        <Link href="/tang-gu-lun-jin" className="text-indigo-600 hover:underline">Back to List</Link>
      </div>
    );
  }
  
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  
  return (
    <div className="min-h-screen bg-white text-slate-900 p-6 font-sans">
      <div className="max-w-2xl mx-auto py-12">
        
        <Link href="/tang-gu-lun-jin" className="inline-flex items-center text-slate-500 hover:text-indigo-600 mb-8 transition-colors text-sm">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to List
        </Link>
        
        {/* No manual header here, let markdown render the title in the content */}
        
        {data.date && (
          <div className="text-sm text-slate-500 mb-6">
            <span className="font-medium">Date:</span> {data.date}
          </div>
        )}
        
        <article className="prose prose-slate max-w-none">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex]}
          >
            {content}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
