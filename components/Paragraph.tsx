type Props = {
  children: React.ReactNode;
  dim?: boolean;
};

const Paragraph = ({ children, dim }: Props) => {
  return (
    <p
      className={`text-base font-normal ${
        dim ? 'text-zinc-500' : 'text-zinc-600 dark:text-zinc-400'
      }`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
