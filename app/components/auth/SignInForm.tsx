'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import GoogleSignIn from './GoogleSignIn';
import { createClient } from '@/app/api/client';

export default function SignInForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const supabase = createClient();
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        console.error('Supabase auth error:', authError);
        
        // Show the actual Supabase error message to user
        if (authError.message.includes('Invalid login credentials')) {
          setError('❌ Invalid email or password. Please check and try again.');
        } else if (authError.message.includes('Email not confirmed')) {
          setError('⚠️ Please confirm your email before signing in. Check your inbox.');
        } else if (authError.message.includes('User not found')) {
          setError('❌ No account found with this email. Please sign up first.');
        } else {
          // Show the actual Supabase error
          setError(`❌ ${authError.message}`);
        }
        return;
      }

      console.log('Signed in successfully:', data);
      setSuccess('✅ Signed in successfully! Redirecting to home...');
      setError('');
      setTimeout(() => {
        router.push('/');
      }, 1200);
    } catch (err) {
      console.error('Sign-in failed:', err);
      setError('An unexpected error occurred. Please try again.');
      setSuccess('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Sign In</h2>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md text-red-700 text-sm font-medium">
          <div className="flex gap-2">
            <span className="text-lg">⚠️</span>
            <div>
              <p className="font-semibold mb-1">Sign In Error</p>
              <p>{error}</p>
            </div>
          </div>
        </div>
      )}

      {success && (
        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-md text-green-700 text-sm font-medium">
          <div className="flex gap-2">
            <span className="text-lg">✅</span>
            <div>
              <p className="font-semibold mb-1">Success</p>
              <p>{success}</p>
            </div>
          </div>
        </div>
      )}

      {/* Email Input */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
          placeholder="you@example.com"
        />
      </div>

      {/* Password Input */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
          placeholder="••••••••"
        />
      </div>

      {/* Forgot Password Link */}
      <div className="text-right">
        <a href="#" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
          Forgot password?
        </a>
      </div>

      {/* Sign In Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-2.5 rounded-lg transition-colors duration-200"
      >
        {loading ? 'Signing in...' : 'Sign In'}
      </button>

      {/* Divider */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-600">Or continue with</span>
        </div>
      </div>

      {/* Google Sign In */}
      <GoogleSignIn />
    </form>
  );
}
