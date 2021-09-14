import "../styles/globals.css";
import { UserContextProvider } from "@/utils/useUser";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}

export default MyApp;
