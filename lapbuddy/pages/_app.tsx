
import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";

export default function App({ Component, pageProps }: AppProps) {

    return (
      <SnackbarProvider>
        <Component {...pageProps} />
      </SnackbarProvider>
  );
  }
