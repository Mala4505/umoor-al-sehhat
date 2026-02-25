import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon, HeartPulseIcon } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
  showToast: (message: string, type: 'success' | 'error') => void;
}

const CORRECT_PASSWORD = 'admin';

export function LoginPage({ onLogin, showToast }: LoginPageProps) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isShaking, setIsShaking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      onLogin();
      showToast('Welcome back!', 'success');
    } else {
      setError('Incorrect password. Please try again.');
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      showToast('Login failed', 'error');
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-teal-50 via-slate-50 to-blue-50 px-4">
      <div className="w-full max-w-sm">
        {/* Logo & App Name */}
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-600 shadow-lg shadow-teal-200">
            <HeartPulseIcon className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-800">
            Umoor Al-Sehhat
          </h1>
          <p className="mt-1 text-sm text-slate-500">Health Screening App</p>
        </div>

        {/* Login Card */}
        <div
          className={`rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-transform ${isShaking ? 'animate-[shake_0.4s_ease-in-out]' : ''}`}>

          {/* <h2 className="mb-5 text-base font-semibold text-slate-700">
            Volunteer Access
          </h2> */}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-400">

                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError('');
                  }}
                  placeholder="Enter access password"
                  className={`h-12 w-full rounded-xl border bg-slate-50 px-4 pr-12 text-base text-slate-800 placeholder-slate-300 transition focus:border-teal-400 focus:bg-white focus:ring-2 focus:ring-teal-100 ${error ? 'border-red-300 focus:border-red-400 focus:ring-red-100' : 'border-slate-200'}`}
                  autoComplete="current-password"
                  aria-describedby={error ? 'password-error' : undefined} />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1 text-slate-400 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}>

                  {showPassword ?
                    <EyeOffIcon className="h-5 w-5" /> :

                    <EyeIcon className="h-5 w-5" />
                  }
                </button>
              </div>
              {error &&
                <p
                  id="password-error"
                  className="mt-2 text-xs text-red-500"
                  role="alert">

                  {error}
                </p>
              }
            </div>

            <button
              type="submit"
              className="h-12 w-full rounded-xl bg-teal-600 text-base font-semibold text-white shadow-sm shadow-teal-200 transition hover:bg-teal-700 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">

              Sign In
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-slate-400">
          For authorized volunteers only
        </p>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-6px); }
          40% { transform: translateX(6px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
        }
      `}</style>
    </div>);

}