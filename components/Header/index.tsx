type Props = {
  children: string;
};

const Header = ({ children }: Props) => {
  return (
    <h3 className="font-black text-3xl text-zinc-900 dark:text-zinc-50 sm:text-4xl">{children}</h3>
  );
};

export default Header;
