type Props = {
  children: string;
};

const SkillPill = ({ children }: Props) => {
  return (
    <li className="font-mono whitespace-nowrap bg-white rounded-full text-base px-3 py-1.5 m-1 font-light border border-gray-300 text-zinc-600 dark:text-zinc-400 dark:bg-[#121418] dark:border-gray-50/10 [font-variant-ligatures:none]">
      {children}
    </li>
  );
};

export default SkillPill;
