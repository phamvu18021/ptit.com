"use client";
import { BtnMes, BtnPhone, BtnZalo, BtnEmail } from "@/components/BtnCTA";
import { Loading } from "@/components/Loading";
import {
  Box,
  Container,
  Divider,
  Heading,
  VStack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { url } from "inspector";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

// const SLiderPosts = dynamic(
//   () => import("./SliderPosts").then((mod) => mod.SLiderPosts),
//   {
//     loading: () => <Loading />,
//   }
// );

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
      {/* <Box bg="radial-gradient(circle, rgba(5,70,89,1) 2%, rgba(98,212,245,1) 100%, rgba(252,89,52,1) 100%)">
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
      </Box> */}

      <Box bg={"#F8F9FA"}>
        <Container maxW={"8xl"}>
          {/* <Breadcrumbs path={"Tin tức & sự kiện"} title={"Tin tức"} /> */}
          <Breadcrumb fontWeight="medium" fontSize="md" py={4}>
            <BreadcrumbItem fontWeight={600}>
              <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem px={4} fontWeight={600}>
              <BreadcrumbLink href="/tin-tuc">Tin tức & sự kiện</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Box py={8}>
            <Text fontSize={{ lg: "4xl", sm: "xl" }} fontWeight={700} py={4}>
              TIN TỨC VÀ SỰ KIỆN
            </Text>
            <hr
              style={{
                background: "#6F38C5",
                height: "2px",
                border: "none",
                width: "3.5rem",
              }}
            />
          </Box>
        </Container>
      </Box>
      <Box
        bgImage={"url('/bannernews.png')"}
        bgRepeat={"no-repeat"}
        bgSize={"contain"}
        maxW={"100vw"}
        // h={"60vh"}
        h={{ base: "20vh", md: "35vh", lg: "60vh" }}
      ></Box>

      {/* <Box mt={"32px"}>
        <Suspense fallback={<Loading />}>
          <SLiderPosts />
        </Suspense>
      </Box> */}
      <Box pt={"32px"}>
        <Suspense fallback={<Loading />}>
          <ListPosts handleRouter={handleRouter} />
        </Suspense>
      </Box>
      <Divider size={"xl"} />
    </Box>
  );
};
