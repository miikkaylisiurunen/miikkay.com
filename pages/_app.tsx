import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { Inter, Roboto_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  adjustFontFallback: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <div className={`${inter.variable} ${robotoMono.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
      <Analytics />
    </ThemeProvider>
  );
}

export default MyApp;
