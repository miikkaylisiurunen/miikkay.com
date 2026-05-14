import type { Metadata, Viewport } from 'next';
import { Inter as FontSans, Roboto_Mono as FontMono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const fontSans = FontSans({
  variable: '--next-font-sans',
  subsets: ['latin'],
});

const fontMono = FontMono({
  variable: '--next-font-mono',
  subsets: ['latin'],
  fallback: [
    'ui-monospace',
    'SFMono-Regular',
    'Menlo',
    'Monaco',
    'Consolas',
    'Liberation Mono',
    'Courier New',
    'monospace',
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://miikkay.com'),
  title: 'Miikka Ylisiurunen',
  description: 'Software engineer interested in web development.',
  openGraph: {
    url: '/',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: [
    {
      media: '(prefers-color-scheme: light)',
      color: 'rgb(249,250,251)',
    },
    {
      media: '(prefers-color-scheme: dark)',
      color: 'rgb(0,0,0)',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body className="bg-gray-50 dark:bg-black">
        <ThemeProvider attribute="class" disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
