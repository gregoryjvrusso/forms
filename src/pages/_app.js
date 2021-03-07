import Head from "next/head";
import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../common";

const CustomApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head />
      <ThemeProvider theme={{}}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default CustomApp;
