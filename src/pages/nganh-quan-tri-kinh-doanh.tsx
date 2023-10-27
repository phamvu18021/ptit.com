"use client";
import { Box } from "@chakra-ui/react";

import ErrorBoundary from "@/components/ErrorBoundary";
import { Loading } from "@/components/Loading";
import { SamePosts } from "@/features/post/Sames";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";
const Qtkd = dynamic(
  () => import("@/features/nganh-qtkd").then((mod) => mod.Qtkd),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return (
    <>
      <NextSeo
        title="Ngành công nghệ thông tin - Đại học Thái Nguyên"
        description="Ngành công nghệ thông tin - Đại học Thái Nguyên, thông tin ngành công nghệ thông tin Đại học Thái nguyên"
      />
      <Qtkd />
      <ErrorBoundary fallback={<h1>Lỗi server</h1>}>
        <Box maxW={"1728px"} margin={"0 auto"}> <SamePosts catId={"84"} id={"7096"} /> </Box>
      </ErrorBoundary>
    </>
  )
};

export default Page;
