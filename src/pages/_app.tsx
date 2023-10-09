import Layout from "@/layouts";
import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import { DefaultSeo } from "next-seo";

import "@/styles/globals.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page: any) => page);

  return (
    <>
      <DefaultSeo
        title="Đại học Thái Nguyên hệ đào tạo từ xa"
        description="Đại học Thái Nguyên hệ đào tạo từ xa tuyển sinh 2023"
      />
      <ChakraProvider theme={theme}>
        <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
      </ChakraProvider>
    </>
  );
};

export default App;
