import Layout from "@/layout/Layout";
import "tailwindcss/tailwind.css";
import { Provider } from "next-auth/client";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
