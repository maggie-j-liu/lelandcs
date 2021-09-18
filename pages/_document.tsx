import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500&display=swap"
            rel="stylesheet"
          />
          <meta name="color-scheme" content="dark" />
        </Head>
        <body
          className={
            "bg-gray-900 text-white selection:bg-fuchsia selection:text-white"
          }
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
