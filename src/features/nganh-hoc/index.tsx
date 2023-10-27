"use client";
import { Categoty } from "@/components/Categoty";
import { HeadSection } from "@/components/HeadSection";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  Grid,
  Heading,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
export const nganhdaotao = () => {
  return (
    <>
      <Box margin={"0 auto"} minH={"214px"} bg={"#F8F9FA"}>
        <Container maxW={"1728px"} pb={"24px"}>
          <Breadcrumb
            padding={"16px 0px"}
            color={"#00338d "}
            fontWeight={"bold"}
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/nganh-hoc">Ngành học </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <HeadSection subtitle="NGÀNH HỌC  " />
        </Container>
        <Box
          bgRepeat={"no-repeat"}
          bgSize="cover"
          w={"100%"}
          position="relative"
          height={"511px"}
        >
          <Image
            priority
            alt="Ngành đào tạo"
            src={"/bgNdt.jpg"}
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </Box>
        <Categoty />
      </Box>
    </>
  );
};
