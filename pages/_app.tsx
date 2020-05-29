import React, { FC } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/index.css";
import Layout from "@/components/Layout";

// TODO: handle global loading on each link change
const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&family=Roboto+Condensed:wght@300;400;700&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default App;
