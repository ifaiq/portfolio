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
  title: 'Faiq Shariff',
  description: 'Welcome to my portfolio website',
  openGraph: {
    title: 'Faiq Shariff',
    description: 'Welcome to my portfolio website',
    images: [
      {
        url: '/faiq.jpg',
        alt: 'Faiq Shariff Portfolio', // Optional: Alt text for the image
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`select-none bg-gradient-to-r from-white to-black antialiased ${hankenGrotesk.className}`}>
        {/* <Navbar /> */}
        {children}
        <Analytics />
      </body>
    </html>
  );
}
