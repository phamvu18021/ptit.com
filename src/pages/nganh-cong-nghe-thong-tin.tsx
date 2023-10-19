"use client";

import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";

const Cntt = dynamic(
  () => import("@/features/nganh-cntt").then((mod) => mod.Cntt),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return (
    <>
      <NextSeo
        title="Ngành công nghệ thông tin - Học viện Công nghệ Bưu chính Viễn thông"
        description="Ngành công nghệ thông tin - Học viện Công nghệ Bưu chính Viễn thông, thông tin ngành công nghệ thông tin Học viện Công nghệ Bưu chính Viễn thông"
      />
      <Cntt />
    </>
  );
};

export default Page;
