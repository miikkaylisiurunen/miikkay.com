type Props = {
  children: string;
};

const Header = ({ children }: Props) => {
  return (
    <h2 className="font-semibold tracking-wide text-xl text-zinc-800 dark:text-zinc-200">
      {children}
    </h2>
  );
};

export default Header;
