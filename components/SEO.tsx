import { SITE_URL } from "@/utils/constants";
import Head from "next/head";

const SEO = ({
  title,
  description,
  author,
  url,
  image,
  twitterCard,
}: {
  title?: string;
  description?: string;
  author?: string;
  url?: string;
  image?: string;
  twitterCard?: string;
}) => {
  return (
    <Head>
      {title && <title>{title}</title>}
      {description && (
        <meta name="description" content={description} key="description" />
      )}
      {author && <meta name="author" content={author} key="author" />}
      {url !== undefined && (
        <meta property="og:url" content={`${SITE_URL}${url}`} key="og:url" />
      )}
      {title && <meta property="og:title" content={title} key="og:title" />}
      {description && (
        <meta
          property="og:description"
          content={description}
          key="og:description"
        />
      )}
      {image && (
        <meta
          property="og:image"
          content={`${SITE_URL}${image}`}
          key="og:image"
        />
      )}
      {twitterCard && (
        <meta name="twitter:card" content={twitterCard} key="twitter:card" />
      )}
    </Head>
  );
};

export default SEO;
