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
      className="cursor-pointer text-zinc-500 bg-white p-2.5 border border-gray-300 hover:border-zinc-400 hover:bg-gray-50 dark:border-neutral-800 rounded-lg dark:bg-neutral-950 dark:hover:bg-neutral-900 transition-colors"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
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
