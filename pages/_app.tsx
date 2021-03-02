import type { AppProps } from "next/app";

import "../styles/globals.css";
import "react-tippy/dist/tippy.css";

export default function App({ Component, pageProps }: AppProps) {
  // TODO: create an appContext with an already instantiated KraneClient
  return <Component {...pageProps} />;
}
