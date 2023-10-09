"use client";

import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";

const Lienhe = dynamic(
  () => import("@/features/lien-he").then((mod) => mod.Lienhe),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return (
    <>
      <NextSeo
        title="Liên hệ học từ xa Đại học Thái Nguyên"
        description="Liên hệ học từ xa Đại học Thái Nguyên, tiết kiệm chi phí và thời gian"
      />
      <Lienhe />
    </>
  );
};

export default Page;
