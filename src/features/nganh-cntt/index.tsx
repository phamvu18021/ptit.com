import { IntroduceCntt } from "@/components/CardIntroduceNganh";
import { CardProgram } from "@/components/CardProgramCntt";
import { HeadSection } from "@/components/HeadSection";
import { InputMajorcntt } from "@/components/InputMajor";
import { RouterNganh } from "@/components/RouterNganh";
import { CardOpportunityCntt } from "@/components/CardOpportunityCntt";

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
} from "@chakra-ui/react";
import Image from "next/image";

export const Cntt = () => {
  return (
    <>
      <Box margin={"0 auto"} minH={"214px"} bg={"#F8F9FA"}>
        <Container maxW={"1728px"}>
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
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/nganh-cong-nghe-thong-tin"
                color={"#000 !important"}
              >
                Công nghệ thông tin{" "}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <HeadSection subtitle="Công nghệ thông tin" />
        </Container>
      </Box>
      <InputMajorcntt />
      <RouterNganh />
      <IntroduceCntt />
      <Box id="sectionBenefit" pt={{ lg: 10, base: 20 }}>
        <Container maxW={"1682px"} margin={"0 auto"}>
          <Image
            src="/nganhcntt.jpg"
            alt="ptit"
            width={1920}
            height={1080}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Container>
      </Box>
      <CardProgram />
      <CardOpportunityCntt />
    </>
  );
};
