
// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Ensure this path is correct
import { AuthProvider } from '@/context/AuthContext'; // Ensure this path is correct
import Navbar from '@/components/Navbar'; // Ensure this path is correct

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Authentication System',
  description: 'Next.js authentication system with FastAPI backend',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
