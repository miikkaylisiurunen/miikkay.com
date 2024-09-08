type Props = {
  children: string;
  ellipsis?: boolean;
};

const Subheader = ({ children, ellipsis }: Props) => {
  const ellipsisClasses = ellipsis ? 'text-ellipsis overflow-hidden whitespace-nowrap' : '';

  return (
    <h3 className={`font-semibold text-zinc-700 dark:text-zinc-300 text-base ${ellipsisClasses}`}>
      {children}
    </h3>
  );
};

export default Subheader;
