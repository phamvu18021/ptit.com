"use client";

import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";

const Dtvt = dynamic(
  () => import("@/features/nganh-dtvt").then((mod) => mod.Dtvt),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return (
    <>
      <NextSeo
        title="Ngành điện tử viễn thông - Học viện Công nghệ Bưu chính Viễn thông"
        description="Ngành điện tử viễn thông - Học viện Công nghệ Bưu chính Viễn thông, thông tin ngành điện tử viễn thông Học viện Công nghệ Bưu chính Viễn thông"
      />
      <Dtvt />
    </>
  );
};

export default Page;
