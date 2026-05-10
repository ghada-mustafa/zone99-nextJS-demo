'use client';

import { useState } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

export default function AuthContainer() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome</h1>
          <p className="text-gray-600">Manage your account securely</p>
        </div>

        {/* Toggle Between Sign In and Sign Up */}
        <div className="flex gap-2 mb-8 bg-gray-200 rounded-lg p-1">
          <button
            onClick={() => setIsSignIn(true)}
            className={`flex-1 py-3 px-4 rounded-md font-semibold transition-all duration-200 ${
              isSignIn
                ? 'bg-white text-indigo-600 shadow-md'
                : 'bg-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsSignIn(false)}
            className={`flex-1 py-3 px-4 rounded-md font-semibold transition-all duration-200 ${
              !isSignIn
                ? 'bg-white text-indigo-600 shadow-md'
                : 'bg-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          {isSignIn ? <SignInForm /> : <SignUpForm />}
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          {isSignIn
            ? "Don't have an account? "
            : 'Already have an account? '}
          <button
            onClick={() => setIsSignIn(!isSignIn)}
            className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
          >
            {isSignIn ? 'Sign up' : 'Sign in'}
          </button>
        </p>
      </div>
    </div>
  );
}
