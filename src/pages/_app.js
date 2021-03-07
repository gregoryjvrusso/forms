import Head from "next/head";
import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "~/styles";

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
