type Props = {
  children: string;
};

const SkillPill = ({ children }: Props) => {
  return (
    <li className="font-mono whitespace-nowrap bg-white rounded-full text-base py-2 px-3 m-1 text-zinc-600 font-normal shadow-[0_4px_16px_rgb(209_213_219/0.3)] dark:text-zinc-400 dark:bg-zinc-800 dark:shadow-[0_4px_16px_rgb(0_0_0/0.2)] [font-variant-ligatures:none]">
      {children}
    </li>
  );
};

export default SkillPill;
