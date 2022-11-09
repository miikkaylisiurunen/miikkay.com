type Props = {
  children: string;
  ellipsis?: boolean;
};

const Subheader = ({ children, ellipsis }: Props) => {
  const ellipsisClasses = ellipsis ? 'text-ellipsis overflow-hidden whitespace-nowrap' : '';

  return (
    <h4 className={`font-bold text-zinc-900 dark:text-zinc-50 ${ellipsisClasses}`}>{children}</h4>
  );
};

export default Subheader;
