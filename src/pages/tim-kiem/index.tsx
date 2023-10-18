"use client";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Search } from "@/features/search";
import { NextSeo } from "next-seo";

import { useSearchParams } from "next/navigation";

// const Page = () => {
//     const search = useSearchParams();
//     const searchQuery =search ? search.get("q") : null;
// const endcodedSearchQuery =encodeURI(searchQuery  || "");

//   return <div>Search page</div>;
// };

const Page = () => {
  return (
    <>
      <NextSeo
        title="Tin tức và thông báo tuyển sinh - Đại học Thái Nguyên"
        description="Đại học Thái Nguyên tuyển sinh năm 2023 - tổng hợp các tin tức tuyển sinh mới nhất của Đại học Thái Nguyên"
      />
      <ErrorBoundary fallback={<h1>Lỗi server</h1>}>
        <Search />
      </ErrorBoundary>
    </>
  );
};

export default Page;
