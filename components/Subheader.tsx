type Props = {
  children: string;
  ellipsis?: boolean;
};

const Subheader = ({ children, ellipsis }: Props) => {
  const ellipsisClasses = ellipsis ? 'text-ellipsis overflow-hidden whitespace-nowrap' : '';

  return (
    <h4 className={`font-medium text-zinc-700 dark:text-zinc-300 text-base ${ellipsisClasses}`}>
      {children}
    </h4>
  );
};

export default Subheader;
