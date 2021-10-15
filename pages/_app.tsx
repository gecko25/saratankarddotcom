import type { AppProps } from "next/app";
import SSRProvider from "react-bootstrap/SSRProvider";
import "bootstrap/dist/css/bootstrap.min.css";

/* Components */
import { Header, Footer } from "@components/index";

/* Styles */
import "@styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </SSRProvider>
  );
}
export default MyApp;
