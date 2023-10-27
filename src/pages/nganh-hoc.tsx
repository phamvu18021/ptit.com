"use client";

import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";

const Ndt = dynamic(
  () => import("@/features/nganh-hoc").then((mod) => mod.nganhdaotao),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return (
    <>
      <NextSeo
        title="Ngành học - Học Viện Bưu Chính Viễn Thông"
        description="Ngành học - Học Viện Bưu Chính Viễn Thông"
      />
      <Ndt />
    </>
  );
};

export default Page;
