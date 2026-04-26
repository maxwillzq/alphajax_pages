'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function SignIn() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/'
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    const result = await signIn('credentials', {
      username,
      password,
      redirect: false,
      callbackUrl
    })
    
    if (result?.error) {
      setError('Sign in failed. Please check your username and password.')
    } else {
      router.push(callbackUrl)
    }
  }
  
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 dark:bg-slate-950">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-sm border border-slate-200 dark:bg-slate-900 dark:border-slate-800">
        <h1 className="text-2xl font-bold text-slate-900 mb-6 text-center dark:text-white">Member Sign In</h1>
        
        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-md dark:bg-red-900/20 dark:text-red-400">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-sm text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors font-medium"
          >
            Sign In
          </button>
        </form>
        
        <div className="mt-6 border-t border-slate-200 pt-6 dark:border-slate-700">
          <button
            onClick={() => signIn('google', { callbackUrl })}
            className="w-full py-2 px-4 border border-slate-300 rounded-md flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors dark:border-slate-700 dark:text-white dark:hover:bg-slate-800"
          >
            <span>Sign in with Google</span>
          </button>
        </div>
      </div>
    </div>
  )
}
