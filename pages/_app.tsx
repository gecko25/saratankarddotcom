import type { AppProps } from "next/app";
import { Fragment } from "react";

/* Components */
import { Header, Footer } from "@components/index";

/* Styles */
import "@styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}
export default MyApp;
