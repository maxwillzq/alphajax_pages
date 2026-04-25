import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-2xl w-full py-12 text-center">
        
        <header className="mb-8">
          <h1 className="text-5xl font-bold tracking-tight mb-4 text-slate-900">
            Welcome.
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed">
            This is my personal space where I share thoughts on investing and research. Use the navigation above to explore the columns.
          </p>
        </header>
        
        <footer className="mt-24 pt-6 border-t border-slate-100">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Homepage. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
