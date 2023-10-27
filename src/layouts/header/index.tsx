"use client";
import { Box, Container, Divider, Flex, HStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { DesktopNav } from "../components/DeskhopNav";
import { HeaderTop } from "../components/HeaderTop";
import { Logo } from "../components/Logo";
import { MobileNav } from "../components/MobileNav";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const Header = () => {
  const rou = useRouter();

  const [headt, setHeadt] = useState<"relative" | "sticky">("sticky");

  useEffect(() => {
    switch (rou.asPath) {
      case "/nganh-cong-nghe-thong-tin":
        setHeadt("relative");
        break;
      case "/nganh-ky-thuat-dien-tu-vien-thong":
        setHeadt("relative");
        break;
      case "/nganh-quan-tri-kinh-doanh":
        setHeadt("relative");
        break;
      default:
        setHeadt("sticky");
    }
  }, [rou.asPath]);

  return (
    <>
      <Box zIndex={11} pos={"relative"} bg={"red.600"} w={"100%"}>
        <Container maxW="8xl">
          <HeaderTop />
        </Container>
      </Box>
      <Divider />
      <Box
        boxShadow="xs"
        pos={headt}
        top={"0"}
        left={0}
        right={0}
        zIndex={10}
        bg={"white"}
      >
        <Container
          as={Flex}
          bg={"white"}
          color={"gray.600"}
          minH={"60px"}
          py={{ base: 3 }}
          px={{ base: 4 }}
          align={"flex-end"}
          justifyContent={"space-around"}
          maxW="8xl"
        >
          <HStack
            flex={1}
            justify={"start"}
            display={{ base: "none", lg: "flex" }}
            pb={4}
          >
            <Logo />
          </HStack>
          <Flex ml={{ base: -2 }} display={{ base: "flex", lg: "none" }}>
            <MobileNav />
          </Flex>
          <Flex
            flex={{ base: 1 }}
            justify={{ base: "none", lg: "end" }}
            align={"center"}
          >
            <Flex
              display={{ base: "none", lg: "flex" }}
              ml={{ base: "0", lg: "10" }}
              align={"center"}
            >
              <DesktopNav />
            </Flex>
          </Flex>
          <Flex display={{ base: "flex", lg: "none" }}>
            <Link
              href="/"
              style={{ display: "flex", alignItems: "center", gap: "4px" }}
            >
              <Image
                priority
                width={50}
                height={50}
                src={`/logo-dhthainguyen.png`}
                alt="logo HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG  "
              />
            </Link>
          </Flex>
        </Container>
      </Box>
    </>
  );
};
