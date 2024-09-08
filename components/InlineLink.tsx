import Link from 'next/link';

type Props = {
  href: string;
  external?: boolean;
  children: string;
};

const InlineLink = ({ href, external, children }: Props) => {
  const className =
    'text-zinc-800 dark:text-zinc-300 underline decoration-zinc-400 dark:decoration-zinc-300/50';

  if (external) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  } else {
    return (
      <Link className={className} href={href}>
        {children}
      </Link>
    );
  }
};

export default InlineLink;
