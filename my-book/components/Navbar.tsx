
// my-book/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          My App
        </Link>
        <div className="space-x-4">
          {isAuthenticated ? (
            <>
              <span className="mr-4">Hello, {user?.username || user?.email}!</span>
              <button onClick={logout} className="rounded bg-red-600 px-3 py-2 hover:bg-red-700">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/signin" className="rounded bg-blue-600 px-3 py-2 hover:bg-blue-700">
                Sign In
              </Link>
              <Link href="/signup" className="rounded bg-green-600 px-3 py-2 hover:bg-green-700">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
