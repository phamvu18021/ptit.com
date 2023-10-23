"use client";

import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";

const Kt = dynamic(() => import("@/features/nganh-kt").then((mod) => mod.Kt), {
  loading: () => <Loading />,
});

const Page = () => {
  return (
    <>
      <NextSeo
        title="Ngành kế toán - Học viện Công nghệ Bưu chính Viễn thông"
        description="Ngành kế toán - Học viện Công nghệ Bưu chính Viễn thông, thông tin ngành kế toán Đại học Thái nguyên"
      />
      <Kt />
    </>
  );
};

export default Page;
