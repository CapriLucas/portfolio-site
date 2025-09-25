import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Header from '@/components/header/Header';
import './globals.scss';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Lucas Capriata - Full-Stack Developer',
  description: 'Full-stack developer specializing in React, Next.js, Node.js, and modern web technologies. Building scalable applications with clean code and great user experience.',
  openGraph: {
    title: 'Lucas Capriata - Full-Stack Developer',
    description: 'Full-stack developer specializing in React, Next.js, Node.js, and modern web technologies.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucas Capriata - Full-Stack Developer',
    description: 'Full-stack developer specializing in React, Next.js, Node.js, and modern web technologies.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
