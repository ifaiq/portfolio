import type { Metadata, Viewport } from 'next';
import { Newsreader } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { site } from '@/lib/content';
import './globals.css';

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
});

const description = 'I build the part of a product you cannot see: the data, the messages, the payments, and the AI.';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: site.name,
    title: site.name,
    description,
    images: [{ url: '/faiq.jpg', alt: 'Faiq Shariff' }],
  },
  twitter: {
    card: 'summary',
    title: site.name,
    description,
    images: ['/faiq.jpg'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#faf8f4',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={newsreader.variable}>
      <body className="font-serif">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
