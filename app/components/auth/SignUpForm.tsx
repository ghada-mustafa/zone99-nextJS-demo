'use client';

import { useState } from 'react';
import GoogleSignIn from './GoogleSignIn';
import { createClient } from '@/app/api/client';

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!formData.fullName.trim()) {
      setError('❌ Please enter your full name.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('❌ Please enter a valid email address.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('❌ Passwords do not match.');
      return;
    }

    if (formData.password.length < 8) {
      setError('❌ Password must be at least 8 characters long.');
      return;
    }

    setLoading(true);

    try {
      const supabase = createClient();
      const { data, error: authError } = await supabase.auth.signUp({
        email: formData.email.toLowerCase().trim(),
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
          },
        },
      });

      if (authError) {
        console.error('Supabase signup error:', authError);
        if (authError.message.includes('already registered')) {
          setError('⚠️ This email is already registered. Please sign in instead.');
        } else if (authError.message.includes('invalid email')) {
          setError('❌ This email address is not allowed. Please use a different email.');
        } else if (authError.message.includes('is invalid')) {
          setError('❌ Please check your email format. Supabase may have domain restrictions.');
        } else {
          setError(`❌ ${authError.message}`);
        }
        return;
      }

      console.log('Account created successfully:', data);
      setError(''); // Clear any errors
      // Show success message (optional)
      alert('✅ Account created! Please check your email to confirm your account.');
    } catch (err) {
      console.error('Sign-up failed:', err);
      setError('❌ An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Create Account</h2>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 bg-red-50 p-4 rounded-md text-red-700 text-sm font-medium">
          <div className="flex gap-2">
            <span className="text-lg">⚠️</span>
            <div>
              <p className="font-semibold mb-1">Sign Up Error</p>
              <p>{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* Full Name Input */}
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
          Full Name
        </label>
        <input
          id="fullName"
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
          placeholder="John Doe"
        />
      </div>

      {/* Email Input */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
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
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
          placeholder="••••••••"
        />
        <p className="text-xs text-gray-500 mt-1">At least 8 characters</p>
      </div>

      {/* Confirm Password Input */}
      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
          placeholder="••••••••"
        />
      </div>

      {/* Sign Up Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-2.5 rounded-lg transition-colors duration-200"
      >
        {loading ? 'Creating account...' : 'Sign Up'}
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

      {/* Google Sign Up */}
      <GoogleSignIn />
    </form>
  );
}
