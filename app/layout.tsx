import type { Metadata } from 'next';
import { Hanken_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { Analytics } from '@vercel/analytics/react';

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-hanken-grotesk',
});

export const metadata: Metadata = {
  title: 'Noah Gomes',
  description: 'Welcome to my portfolio website, check out the source code if you like and leave a star :)',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`select-none bg-[#000] antialiased ${hankenGrotesk.className}`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
