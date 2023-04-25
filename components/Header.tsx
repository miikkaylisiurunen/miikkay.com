type Props = {
  children: string;
};

const Header = ({ children }: Props) => {
  return (
    <h3 className="font-black text-3xl text-zinc-800 dark:text-zinc-200 sm:text-4xl">{children}</h3>
  );
};

export default Header;
