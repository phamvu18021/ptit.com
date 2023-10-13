"use client";

import { BtnTheme } from "@/components/BtnTheme";
import { FormPoup } from "@/components/FormContact";
import { ModalBase } from "@/components/Modal";
import {
  Box,
  Container,
  Divider,
  Flex,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
import { DesktopNav } from "../components/DeskhopNav";
import { HeaderTop } from "../components/HeaderTop";
import { MobileNav } from "../components/MobileNav";
import { Logo } from "../components/Logo";

export const Header = () => {
  const { onToggle, onOpen, onClose, isOpen } = useDisclosure();
  return (
    <>
      <Box
        pos={"relative"}
        bg={"red"}
        w={"100%"}
        h={"20px"}
        color={"red"}
      ></Box>

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
            justify={{ base: "none", lg: "center" }}
            align={"center"}
          >
            <Flex
              display={{ base: "none", lg: "flex" }}
              ml={10}
              align={"center"}
            >
              <DesktopNav />
            </Flex>
          </Flex>
          <BtnTheme
            colorScheme="red"
            color={"white"}
            size={"md"}
            onClick={onToggle}
            display={{ lg: "none", sm: "block" }}
          >
            Đăng ký tư vấn
          </BtnTheme>
        </Container>
      </Box>

      <ModalBase isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <FormPoup title="Để lại thông tin" />
      </ModalBase>
    </>
  );
};
