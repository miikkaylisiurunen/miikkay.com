import type { AppProps } from 'next/app';
import { Inter, Fira_Code } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import 'styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  adjustFontFallback: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <div className={`${inter.variable} ${firaCode.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
