"use client";

import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";

const Tuyensinh = dynamic(
  () => import("@/features/tuyensinh").then((mod) => mod.tuyensinh),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return (
    <>
      <NextSeo
        title="Tuyển sinh học từ xa Học Viện Bưu Chính Viễn Thông"
        description="Tuyển sinh học từ xa Học Viện Bưu Chính Viễn Thông"
      />
      <Tuyensinh />
    </>
  );
};

export default Page;
