import type { Metadata } from 'next';
import InlineLink from '@/components/InlineLink';
import Paragraph from '@/components/Paragraph';

export const metadata: Metadata = {
  title: 'Page not found',
};

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center p-6">
      <div className="space-y-6">
        <div className="flex space-x-5 justify-center items-center">
          <h1 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200">404</h1>
          <span className="h-14 w-px bg-zinc-400 dark:bg-zinc-600 shrink-0"></span>
          <Paragraph>This page could not be found.</Paragraph>
        </div>
        <div className="text-center">
          <InlineLink href="/">Return home</InlineLink>
        </div>
      </div>
    </div>
  );
}
