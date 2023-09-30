import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';

type Props = {
  title?: string;
  description?: string;
  openGraph?: boolean;
};

const MetaTags = (props: Props) => {
  const router = useRouter();
  const { resolvedTheme } = useTheme();

  const meta: Required<Props> = {
    title: 'Miikka Ylisiurunen',
    description: 'Software engineer interested in web development.',
    openGraph: true,
    ...props,
  };

  return (
    <Head>
      <title>{meta.title}</title>
      {meta.description.length > 0 && <meta name="description" content={meta.description} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="theme-color"
        content={resolvedTheme === 'dark' ? 'rgb(12,14,17)' : 'rgb(249,250,251)'}
      />
      {meta.openGraph && (
        <>
          <meta property="og:title" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:url" content={`https://miikkay.com${router.asPath}`} />
          <meta property="og:image" content="https://miikkay.com/static/og.png" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
        </>
      )}
    </Head>
  );
};

export default MetaTags;
