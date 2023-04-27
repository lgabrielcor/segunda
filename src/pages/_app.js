import { SessionProvider } from "next-auth/react";
import "bootstrap/dist/css/bootstrap.css";
import { wrapper } from "../store/store";

function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default wrapper.withRedux(App);
