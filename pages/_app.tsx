import React, { FC } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import Layout from "@/components/Layout";
import "@/styles/index.css";
import "@/styles/nprogress.css";
import { motion } from "framer-motion";

NProgress.configure({ showSpinner: true });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
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
      <motion.img
        src={require("@/assets/doodles/confetti.svg")}
        alt="confetti"
        className="absolute hidden lg:block bottom-0 left-0"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        style={{ zIndex: -1 }}
      />
    </Layout>
  </>
);

export default App;
