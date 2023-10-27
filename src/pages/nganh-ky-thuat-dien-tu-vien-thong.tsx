"use client";

import { Loading } from "@/components/Loading";
import { Box } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

import ErrorBoundary from "@/components/ErrorBoundary";
import { SamePosts } from "@/features/post/Sames";
const Ktdtvt = dynamic(
  () => import("@/features/nganh-ktdtvt").then((mod) => mod.Ktdtvt),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return (
    <>
      <NextSeo
        title="Ngành kỹ thuật điện tử viễn thông "
        description="Ngành kỹ thuật điện tử viễn thông"
      />
      <Ktdtvt />
      <ErrorBoundary fallback={<h1>Lỗi server</h1>}>
        <Box maxW={"1728px"} margin={"0 auto"}> <SamePosts catId={"84"} id={"7580"} /> </Box>
      </ErrorBoundary>
    </>
  );
};

export default Page;
