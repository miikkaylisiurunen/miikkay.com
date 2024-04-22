import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from './Icons';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // wait until mounted to avoid hydration mismatch error with `resolvedTheme` being undefined
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      className="cursor-pointer text-zinc-400 bg-white p-2.5 border border-gray-300 hover:border-zinc-400 hover:bg-gray-50 dark:border-zinc-400/20 rounded-lg dark:bg-cardBackground dark:hover:bg-cardBackground-lighter dark:hover:border-zinc-600 transition-colors"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? (
        <MoonIcon className="w-5 h-5" />
      ) : (
        <SunIcon className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
