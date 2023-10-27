import { IntroduceKtdtvt } from "@/components/CardIntroduceNganh";
import { CardProgramKtdtvt } from "@/components/CardProgramKtdtvt";
import { HeadSection } from "@/components/HeadSection";
import { InputMajordtvt } from "@/components/InputMajor";
import { RouterNganh } from "@/components/RouterNganh";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { CardOpportunityKtdtvt } from "@/components/CardOpportunityKtdtvt";
export const Ktdtvt = () => {
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
              <BreadcrumbLink as={Link} href={"/"}>
                Trang chủ
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} href={"/nganh-hoc"}>
                Ngành học{" "}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/nganh-ky-thuat-dien-tu-vien-thong"
                color={"#000 !important"}
              >
                Kỹ thuật điện tử viễn thông{" "}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <HeadSection subtitle="Kỹ thuật điện tử viễn thông " />
        </Container>
      </Box>
      <InputMajordtvt />
      <RouterNganh />
      <IntroduceKtdtvt />
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
      <CardProgramKtdtvt />
      <CardOpportunityKtdtvt />
    </>
  );
};
