type Props = {
  children: React.ReactNode;
};

const Paragraph = ({ children }: Props) => {
  return <p className="text-zinc-600 text-base font-normal dark:text-zinc-400">{children}</p>;
};

export default Paragraph;
