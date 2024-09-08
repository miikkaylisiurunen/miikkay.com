import { GithubIcon } from './Icons';
import ThemeToggle from './ThemeToggle';

const NavBar = () => {
  return (
    <div className="flex justify-between items-start xs:flex-row xs:items-center xs:space-y-0 flex-col space-y-4 font-normal text-zinc-600 dark:text-zinc-400">
      <nav className="flex flex-wrap *:mr-1 xs:*:mr-1.5">
        <a
          href="#work"
          className="hover:text-zinc-800 dark:hover:text-zinc-300 transition-colors duration-100"
        >
          work
        </a>
        <span className="opacity-40 select-none">/</span>
        <a
          href="#education"
          className="hover:text-zinc-800 dark:hover:text-zinc-300 transition-colors duration-100"
        >
          education
        </a>
        <span className="opacity-40 select-none">/</span>
        <a
          href="#skills"
          className="hover:text-zinc-800 dark:hover:text-zinc-300 transition-colors duration-100"
        >
          skills
        </a>
        <span className="opacity-40 select-none">/</span>
        <a
          href="#projects"
          className="hover:text-zinc-800 dark:hover:text-zinc-300 transition-colors duration-100"
        >
          projects
        </a>
      </nav>
      <div className="flex space-x-4">
        <a
          className="text-zinc-500 bg-white p-2.5 border border-gray-300 hover:border-zinc-400 hover:bg-gray-50 dark:border-neutral-800 rounded-lg dark:bg-neutral-950 dark:hover:bg-neutral-900 transition-colors"
          href="https://github.com/miikkaylisiurunen"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <GithubIcon className="w-5 h-5" />
        </a>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default NavBar;
