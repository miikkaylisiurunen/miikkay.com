type Props = {
  children: string;
};

const InlineCode = ({ children }: Props) => {
  return <span className="font-mono text-inherit">{children}</span>;
};

export default InlineCode;
