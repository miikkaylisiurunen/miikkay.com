type Props = {
  children: React.ReactNode;
};

const Section = ({ children }: Props) => {
  return <section className="space-y-4">{children}</section>;
};

export default Section;
