type Props = {
  children: React.ReactNode;
};

const Section = ({ children }: Props) => {
  return <section className="space-y-1 sm:space-y-2">{children}</section>;
};

export default Section;
