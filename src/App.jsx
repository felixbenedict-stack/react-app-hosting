import React, { useState } from 'react'
import './App.css'

function App() {
  const [page, setPage] = useState('login')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [registerName, setRegisterName] = useState('')
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')

  const handleLoginSubmit = (event) => {
    event.preventDefault()
    console.log('Login submitted:', { email: loginEmail, password: loginPassword })
    alert(`Login submitted for ${loginEmail}`)
  }

  const handleRegisterSubmit = (event) => {
    event.preventDefault()
    console.log('Register submitted:', { name: registerName, email: registerEmail, password: registerPassword })
    alert(`Account created for ${registerName}`)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/95 p-8 shadow-2xl shadow-slate-900/40">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-semibold tracking-tight">My App</h1>
          <p className="mt-2 text-slate-400">Sign in or create a new account to continue.</p>
        </header>

        <div className="mb-8 flex items-center justify-center gap-2 rounded-full bg-slate-800 p-1">
          <button
            type="button"
            onClick={() => setPage('login')}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${page === 'login' ? 'bg-slate-950 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => setPage('register')}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${page === 'register' ? 'bg-slate-950 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            Register
          </button>
        </div>

        {page === 'login' ? (
          <form onSubmit={handleLoginSubmit} className="space-y-6">
            <div>
              <label htmlFor="login-email" className="mb-2 block text-sm font-medium text-slate-300">
                Email
              </label>
              <input
                id="login-email"
                type="email"
                value={loginEmail}
                onChange={(event) => setLoginEmail(event.target.value)}
                required
                className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="login-password" className="mb-2 block text-sm font-medium text-slate-300">
                Password
              </label>
              <input
                id="login-password"
                type="password"
                value={loginPassword}
                onChange={(event) => setLoginPassword(event.target.value)}
                required
                className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Log in
            </button>

            <p className="text-center text-sm text-slate-500">
              New here?{' '}
              <button type="button" onClick={() => setPage('register')} className="font-semibold text-cyan-400 hover:text-cyan-300">
                Create an account
              </button>
            </p>
          </form>
        ) : (
          <form onSubmit={handleRegisterSubmit} className="space-y-6">
            <div>
              <label htmlFor="register-name" className="mb-2 block text-sm font-medium text-slate-300">
                Full Name
              </label>
              <input
                id="register-name"
                type="text"
                value={registerName}
                onChange={(event) => setRegisterName(event.target.value)}
                required
                className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                placeholder="Jane Doe"
              />
            </div>

            <div>
              <label htmlFor="register-email" className="mb-2 block text-sm font-medium text-slate-300">
                Email
              </label>
              <input
                id="register-email"
                type="email"
                value={registerEmail}
                onChange={(event) => setRegisterEmail(event.target.value)}
                required
                className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="register-password" className="mb-2 block text-sm font-medium text-slate-300">
                Password
              </label>
              <input
                id="register-password"
                type="password"
                value={registerPassword}
                onChange={(event) => setRegisterPassword(event.target.value)}
                required
                className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                placeholder="Create a password"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Register
            </button>

            <p className="text-center text-sm text-slate-500">
              Already have an account?{' '}
              <button type="button" onClick={() => setPage('login')} className="font-semibold text-cyan-400 hover:text-cyan-300">
                Sign in
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  )
}

export default App
