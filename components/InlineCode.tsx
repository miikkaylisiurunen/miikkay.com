type Props = {
  children: string;
};

const InlineCode = ({ children }: Props) => {
  return (
    <span className="font-mono border border-zinc-300 dark:border-zinc-700 rounded-md px-1.5 text-inherit">
      {children}
    </span>
  );
};

export default InlineCode;
