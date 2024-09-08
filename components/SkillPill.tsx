type Props = {
  children: string;
};

const SkillPill = ({ children }: Props) => {
  return (
    <li className="font-mono whitespace-nowrap bg-white rounded-full text-sm px-3 py-1.5 m-1 font-normal border border-gray-300 text-zinc-600 dark:text-zinc-400 dark:bg-neutral-950 dark:border-neutral-800 [font-variant-ligatures:none]">
      {children}
    </li>
  );
};

export default SkillPill;
