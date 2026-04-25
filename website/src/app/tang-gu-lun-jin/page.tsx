import React from 'react';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default async function TangGuLunJin() {
  const dirPath = path.join(process.cwd(), 'public/investing');
  let posts: any[] = [];
  
  if (fs.existsSync(dirPath)) {
    const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'));
    
    posts = files.map(file => {
      const filePath = path.join(dirPath, file);
      const content = fs.readFileSync(filePath, 'utf8');
      const { data, excerpt } = matter(content, { excerpt: true });
      
      const slug = file.replace('.md', '');
      const title = data.title || slug;
      const date = data.date || 'Unknown Date';
      
      return {
        slug,
        title,
        date,
        excerpt: data.description || excerpt || 'Read more about this post...',
        tag: data.tag || 'Investing'
      };
    });
    
    posts.sort((a, b) => b.date.localeCompare(a.date));
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 p-6 font-sans">
      <div className="max-w-2xl mx-auto py-12">
        
        <Link href="/" className="inline-flex items-center text-slate-500 hover:text-indigo-600 mb-8 transition-colors text-sm">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Home
        </Link>
        
        <header className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-slate-900">
            Investing
          </h1>
          <p className="text-slate-500 text-lg">
            My personal investment notes, philosophical thoughts, and market reports.
          </p>
        </header>

        <div className="space-y-16">
          {posts.length === 0 ? (
            <p className="text-slate-500">No posts found in public/investing/</p>
          ) : (
            posts.map(post => (
              <article key={post.slug} className="border-b border-slate-100 pb-12">
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {post.tag}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold text-slate-800 mb-4 hover:text-indigo-600 transition-colors cursor-pointer">
                  {post.title}
                </h2>
                
                <p className="text-slate-600 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="mt-4">
                  <Link href={`/posts/${post.slug}`} className="text-sm font-bold text-indigo-600 hover:underline">
                    Read More →
                  </Link>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
