import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { Inter as FontSans, Roboto_Mono as FontMono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import '@/styles/globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
  adjustFontFallback: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <div className={`${fontSans.variable} ${fontMono.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
      <Analytics />
    </ThemeProvider>
  );
}

export default MyApp;
