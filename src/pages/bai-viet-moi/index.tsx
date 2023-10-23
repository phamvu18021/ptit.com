import { LatestPost } from "@/features/latestPost";
import { NextSeo } from "next-seo";

const Page = () => {
  return (
    <>
      <NextSeo
        title="Tin tức và thông báo tuyển sinh - Học viện Công nghệ Bưu chính Viễn thông"
        description="Học viện Công nghệ Bưu chính Viễn thông tuyển sinh năm 2023 - tổng hợp các tin tức tuyển sinh mới nhất của Học viện Công nghệ Bưu chính Viễn thông"
      />
      <LatestPost />
    </>
  );
};

export default Page;
