'use client'

import React from 'react'

export default function TestPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8 text-white">
      <div className="max-w-md rounded-2xl bg-white/10 p-12 shadow-2xl backdrop-blur-md ring-1 ring-white/20">
        <h1 className="mb-6 text-center text-5xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
            AlphaJAX
          </span>
          <br />
          Portfolio
        </h1>
        <p className="mb-8 text-center text-lg font-medium text-indigo-100">
          Environment Setup Successful!
        </p>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 rounded-xl bg-white/5 p-4 transition-all hover:bg-white/10">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 shadow-lg shadow-green-500/50">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm font-semibold">Next.js 15+ & React 19</span>
          </div>
          <div className="flex items-center space-x-4 rounded-xl bg-white/5 p-4 transition-all hover:bg-white/10">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 shadow-lg shadow-blue-500/50">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-sm font-semibold">Tailwind CSS 4.0</span>
          </div>
          <div className="flex items-center space-x-4 rounded-xl bg-white/5 p-4 transition-all hover:bg-white/10">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <span className="text-sm font-semibold">TypeScript & ESLint</span>
          </div>
        </div>
        <div className="mt-10 text-center text-xs font-semibold uppercase tracking-widest text-indigo-200 opacity-60">
          Ready for Content Migration
        </div>
      </div>
    </div>
  )
}
