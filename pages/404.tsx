import Head from 'next/head';
import { useTheme } from 'next-themes';
import CustomLink from 'components/CustomLink';
import Paragraph from 'components/Paragraph';

export default function Custom404() {
  const { resolvedTheme } = useTheme();

  return (
    <div className="h-screen flex flex-col items-center justify-center p-6">
      <Head>
        <title>404 - Miikka Ylisiurunen</title>
        <meta
          name="theme-color"
          content={resolvedTheme === 'dark' ? 'rgb(23,23,23)' : 'rgb(249,250,251)'}
        />
      </Head>

      <div className="space-y-6">
        <div className="flex space-x-5 justify-center items-center">
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">404</h1>
          <span className="h-14 w-px bg-zinc-400 dark:bg-zinc-600 shrink-0"></span>
          <Paragraph>This page could not be found.</Paragraph>
        </div>
        <div className="text-center">
          <CustomLink href="/">Return home</CustomLink>
        </div>
      </div>
    </div>
  );
}