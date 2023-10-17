"use client";

import { BtnTheme } from "@/components/BtnTheme";
import { FormPoup } from "@/components/FormContact";

import { DesktopNav } from "../components/DeskhopNav";
import { HeaderTop } from "../components/HeaderTop";
import { MobileNav } from "../components/MobileNav";
import { Logo } from "../components/Logo";
import Image from "next/image";
import Link from "next/link";
import {
  Heading,
  VStack,
  Box,
  Container,
  Divider,
  Flex,
  HStack,
  useDisclosure,
} from "@chakra-ui/react";
import { ModalBase } from "@/components/Modal";

export const Header = () => {
  const { onToggle, onOpen, onClose, isOpen } = useDisclosure();
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
        pos={"sticky"}
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
                // style={{ borderRadius: "50%" }}
                src={`/logo-dhthainguyen.png`}
                alt="logo HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG
        "
              />
            </Link>
          </Flex>

          {/* <BtnTheme
            bg="white"
            color={"blackAlpha.500"}
            size={"md"}
            onClick={onToggle}
            display={{ lg: "none", sm: "block" }}
          >
            Đăng ký tư vấn
          </BtnTheme> */}
        </Container>
      </Box>

      <ModalBase isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <FormPoup title="Để lại thông tin" />
      </ModalBase>
    </>
  );
};
