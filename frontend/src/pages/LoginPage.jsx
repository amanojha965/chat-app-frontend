import React from 'react'
import { Link } from 'react-router-dom'

export const LoginPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
    // TODO: wire up authentication logic
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-6 py-12 sm:px-8">
          <div className="w-full max-w-lg rounded-3xl border border-slate-800 bg-slate-900/90 p-10 shadow-2xl shadow-slate-950/50 backdrop-blur-xl">
            <div className="mb-10 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-orange-500/15 text-orange-300 ring-1 ring-orange-500/20">
                <span className="text-2xl">💬</span>
              </div>
              <h1 className="text-4xl font-semibold text-slate-100">Welcome Back</h1>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Sign in to your account and continue your conversations.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <label className="block text-sm font-medium text-slate-300">
                Email
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="mt-3 block w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20"
                />
              </label>

              <label className="block text-sm font-medium text-slate-300">
                Password
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="mt-3 block w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20"
                />
              </label>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-orange-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/50"
              >
                Sign in
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-slate-500">
              Don&apos;t have an account?{' '}
              <Link to="/signup" className="font-semibold text-orange-400 hover:text-orange-300">
                Create account
              </Link>
            </p>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-12">
          <div className="grid w-full max-w-md gap-4">
            <div className="grid grid-cols-3 gap-4 rounded-3xl bg-slate-900/80 p-5 ring-1 ring-slate-700/70">
              {Array.from({ length: 9 }).map((_, index) => (
                <div
                  key={index}
                  className="h-24 rounded-3xl bg-slate-800/80 shadow-inner shadow-slate-950/30"
                />
              ))}
            </div>

            <div className="rounded-3xl bg-slate-900/85 p-8 ring-1 ring-slate-700/70">
              <h2 className="text-2xl font-semibold text-slate-100">Welcome back!</h2>
              <p className="mt-4 text-slate-400">
                Sign in to continue your conversations and catch up with your messages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
