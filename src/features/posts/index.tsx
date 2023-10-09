"use client";

import { Loading } from "@/components/Loading";
import { Box, Container, Divider, Heading } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

const SLiderPosts = dynamic(
  () => import("./SliderPosts").then((mod) => mod.SLiderPosts),
  {
    loading: () => <Loading />,
  }
);

const ListPosts = dynamic(
  () => import("./ListPosts").then((mod) => mod.ListPosts),
  {
    loading: () => <Loading />,
  }
);

export const Posts = () => {
  const router = useRouter();
  const handleRouter = ({ selected }: { selected: number }) => {
    router.push(`/tin-tuc?page=${selected + 1}`);
  };

  return (
    <Box pb={"40px"}>
      <Box bg="radial-gradient(circle, rgba(5,70,89,1) 2%, rgba(98,212,245,1) 100%, rgba(252,89,52,1) 100%)">
        <Container maxW={"6xl"} py="60px">
          <Heading
            as="h2"
            textAlign={"center"}
            size={"lg"}
            pb="16px"
            color={"white"}
          >
            Tin tức Đại học Thái Nguyên
          </Heading>
        </Container>
      </Box>
      <Box mt={"32px"}>
        <Suspense fallback={<Loading />}>
          <SLiderPosts />
        </Suspense>
      </Box>

      <Divider size={"xl"} />
      <Box pt={"32px"}>
        <Suspense fallback={<Loading />}>
          <ListPosts handleRouter={handleRouter} />
        </Suspense>
      </Box>
    </Box>
  );
};
