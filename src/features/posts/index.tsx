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
      <Box bg={"#F8F9FA"}>
        <Container maxW={"8xl"}>
          {/* <Breadcrumbs path={"Tin tức & sự kiện"} title={"Tin tức"} /> */}
          <Breadcrumb fontWeight="medium" fontSize="md" py={4}>
            <BreadcrumbItem fontWeight={700}>
              <BreadcrumbLink color={"facebook.800"} href="/">
                Trang chủ
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem px={4} fontWeight={600}>
              <BreadcrumbLink href="/tin-tuc">Tin tức & sự kiện</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Box py={2}>
            <Text
              fontSize={{ lg: "4xl", sm: "xl" }}
              color={"facebook.800"}
              fontWeight={700}
              py={4}
            >
              TIN TỨC VÀ SỰ KIỆN
            </Text>
            <hr
              style={{
                background: "#223B67",
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
        w={"100vw"}
        // h={"60vh"}
        h={{ base: "15vh",lg:"58vh", md: "25vh", sm: "15vh" }}

      >
 
      </Box>

      {/* <Box mt={"32px"}>
        <Suspense fallback={<Loading />}>
          <SLiderPosts />
        </Suspense>
      </Box> */}
      <Box pt={"12px"}>
        <Suspense fallback={<Loading />}>
          <ListPosts handleRouter={handleRouter} />
        </Suspense>
      </Box>
      <Divider size={"xl"} />
    </Box>
  );
};
