import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // Wait until mounted to avoid hydration mismatch error with `resolvedTheme` being undefined
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const correctClasses = (theme: 'dark' | 'light') => {
    const defaultClasses =
      'hover:bg-gray-200 cursor-pointer px-2 py-1 rounded-md transition-colors dark:hover:bg-neutral-800';
    const selectedClasses = 'font-bold text-zinc-900 dark:text-zinc-50';

    if (theme === resolvedTheme) {
      return `${defaultClasses} ${selectedClasses}`;
    }

    return defaultClasses;
  };

  return (
    <div className="flex items-center -mx-2">
      <button className={correctClasses('light')} onClick={() => setTheme('light')}>
        Light
      </button>
      <span className="mx-1">/</span>
      <button className={correctClasses('dark')} onClick={() => setTheme('dark')}>
        Dark
      </button>
    </div>
  );
};

export default ThemeToggle;
