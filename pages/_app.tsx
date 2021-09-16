import "../styles/globals.css";
import { UserContextProvider } from "@/utils/useUser";
import { AppProps } from "next/app";
import { TicketNumberContextProvider } from "@/utils/useTicketNum";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <TicketNumberContextProvider>
        <Component {...pageProps} />
      </TicketNumberContextProvider>
    </UserContextProvider>
  );
}

export default MyApp;
