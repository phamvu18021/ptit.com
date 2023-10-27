"use client";
import { Box, Flex, Grid, Heading, Image, SimpleGrid,Container, BreadcrumbItem, Breadcrumb, BreadcrumbLink } from "@chakra-ui/react";
import { Register } from "@/features/home/Register"
import { MethodDk } from "@/features/home/Method"
import { Procedure } from "@/features/home/Procedure"
import { HeadSection } from "@/components/HeadSection";


export const tuyensinh = () => {
  return (
    <>
       <Container maxW={"1728px"} pb={"24px"}>
          <Breadcrumb padding={"16px 0px"} color={"#00338d "} fontWeight={"bold"}>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Trang chủ</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href='/tuyen-sinh'>Tuyển Sinh  </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <HeadSection
            subtitle="TUYỂN SINH" />
            </Container>
      <Box
        backgroundColor={"#0a1040"}
        w={"100%"}
        h={{ base: "700px", sm: "700px", lg: "856px" }}
        position="relative"
      >
        <Image
          src={`/banner-ptit.jpg`}
          alt="ptit"
          w={"100%"}
          h={{ base: "100%", lg: "100%", md: "100%" }}
          objectFit="cover"
          margin={"0 auto"}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          backgroundColor="#0a1040"
          opacity="0.4"
          margin={"0 auto"}
        />
      </Box>
      <Box
        pos={"absolute"}
        w={{ base: "90%", md: "90%", lg: "70%" }}
        h={{ base: "auto", md: "400px", lg: "400px" }}
        top={{ base: "383px", sm: "482px", lg: "600px" }}
        left={["5%", "5%"]}
        bg={"rgb(86 9 9 / 71%)"}
        padding={{ base: "55PX 30PX 60PX 30PX", lg: "65PX 35PX 70PX 60PX;" }}
      >
        <Flex >
          <Grid templateColumns={["1fr", "1fr 2fr"]}>
            <SimpleGrid w={["100%", "100%", "100%"]} pr={"60px"} borderRight={{ lg: "1px solid orange", md: "1px solid orange" }} pb={{ base: "20px" }} borderBottom={{ base: "1px solid orange", sm: "none", lg: "none" }}>
              <Heading fontSize={{ lg: "40px", md: "30px" }} color={"white"}>
                PTIT ĐÀO TẠO
              </Heading>
              <Heading fontSize={{ lg: "40px", md: "30px" }} color={"white"}>
                3 NGÀNH HOT
              </Heading>
              <button style={{ background: "#fff", height: "45px", marginTop: "16px", fontWeight: "600" }} > TÌM HIỂU THÊM</button>
            </SimpleGrid>
            <SimpleGrid pl={{ lg: "60px", md: "20px" }} color={"white"} spacing={"10PX"} mt={{ base: "20px" }} >
              <Heading fontSize={["xl", "2xl", "3xl", "28PX"]}>
                - CÔNG NGHỆ THÔNG TIN
              </Heading>
              <Heading fontSize={["xl", "2xl", "3xl", "28PX"]}>
                - QUẢN TRỊ KINH DOANH
              </Heading>
              <Heading fontSize={["xl", "2xl", "3xl", "28PX"]}>
                - KỸ THUẬT ĐIỆN TỬ VIỄN THÔNG
              </Heading>
            </SimpleGrid>
          </Grid>
        </Flex>
      </Box>
      <Box><Register /></Box>
      <Box><Procedure /> </Box>
      <Box><MethodDk /></Box>
    </>
  );
};  