import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@components/Layout";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import theme from "theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
