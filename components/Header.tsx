type Props = {
  children: string;
};

const Header = ({ children }: Props) => {
  return (
    <h3 className="font-semibold tracking-wide text-2xl text-zinc-800 dark:text-zinc-200">
      {children}
    </h3>
  );
};

export default Header;
