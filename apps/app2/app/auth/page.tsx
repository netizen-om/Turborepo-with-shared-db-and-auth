'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { useSearchParams } from 'next/navigation';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const params = useSearchParams();
  const error = params.get('error');

  const handleCredentialSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn('credentials', {
      email,
      password,
      callbackUrl: '/',
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-4">
      <div className="w-full max-w-md p-8 bg-gray-900 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Sign In</h2>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">
            Invalid credentials. Please try again.
          </p>
        )}

        <form onSubmit={handleCredentialSignIn} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Sign in with Email
          </button>
        </form>

        <div className="my-6 border-t border-gray-700 relative">
          <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gray-900 px-2 text-sm text-gray-400">
            OR
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => signIn('google', { callbackUrl: '/' })}
            className="flex items-center justify-center gap-2 w-full py-2 border border-gray-700 rounded-lg hover:bg-gray-800 transition"
          >
            <FcGoogle size={20} />
            Continue with Google
          </button>

          <button
            onClick={() => signIn('github', { callbackUrl: '/' })}
            className="flex items-center justify-center gap-2 w-full py-2 border border-gray-700 rounded-lg hover:bg-gray-800 transition"
          >
            <FaGithub size={20} />
            Continue with GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
