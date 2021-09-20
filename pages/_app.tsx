import "../styles/globals.css";
import { UserContextProvider } from "@/utils/useUser";
import { AppProps } from "next/app";
import { TicketNumberContextProvider } from "@/utils/useTicketNum";
import Head from "next/head";
import { SITE_URL } from "@/utils/constants";
import SEO from "@/components/SEO";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <TicketNumberContextProvider>
        <SEO
          title="Leland Computer Science Club"
          description="Learn. Code. Share. Join Leland Computer Science Club today!"
          author="Leland CS Club"
          image="/lelandcs.png"
          twitterCard="summary_large_image"
        />
        <Component {...pageProps} />
      </TicketNumberContextProvider>
    </UserContextProvider>
  );
}

export default MyApp;
