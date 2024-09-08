import { HTMLAttributes } from 'react';

const Section = ({ children, ...rest }: HTMLAttributes<HTMLElement>) => {
  return (
    <section className="space-y-5" {...rest}>
      {children}
    </section>
  );
};

export default Section;
