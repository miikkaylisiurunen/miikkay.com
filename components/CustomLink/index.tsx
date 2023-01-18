import Link from 'next/link';

type Props = {
  href: string;
  external?: boolean;
  children: string;
};

const CustomLink = ({ href, external, children }: Props) => {
  const classes =
    'font-medium inline-block relative text-zinc-800 dark:text-zinc-300 after:w-full after:h-0.5 after:bg-blue-500 after:-bottom-px after:absolute after:left-0 after:transition-all after:duration-300 after:ease-out hover:after:w-0 hover:after:right-0 hover:after:left-[unset]';

  if (external) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  } else {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }
};

export default CustomLink;
