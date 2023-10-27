"use client";
import { SocialButton } from "./HeaderTop";
import { useSize } from "@/hooks/useSizeWindow";
import { menus } from "@/router";
import {
  HStack,
  Collapse,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Stack,
  useDisclosure,
  Input,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChevronDown, BsJustify } from "react-icons/bs";
import { HeaderTop } from "./HeaderTop";
import { Logo } from "./Logo";
import { FormInputs } from "@/components/FormInputs";
import { FaFacebook } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
interface INavItem {
  title: string;
  childs?: Array<{ title: string; childs?: Array<{}>; path?: string }>;
  path?: string;
  onClose: () => void;
}

export const MobileNavItem = ({ title, childs, path, onClose }: INavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={childs && onToggle}>
      <Flex
        py={2}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
        fontWeight={600}
        color={"white"}
      >
        <Link
          href={path ?? "#"}
          style={{ width: "100%" }}
          onClick={() => !childs && onClose()}
        >
          {title}
        </Link>
      </Flex>
    </Stack>
  );
};

export const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const { size } = useSize();
  const { width } = size;

  return (
    <>
      <div>
        <IconButton
          w={"50px"}
          h={"50px"}
          ref={btnRef}
          onClick={onOpen}
          icon={<Icon as={AiOutlineMenu} w={"24px"} h={"24px"} />}
          variant={"ghost"}
          aria-label={"Toggle Navigation"}
        />

        <Drawer
          isOpen={width < 992 ? isOpen : false}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
          size={"xs"}
        >
          <DrawerOverlay />
          <DrawerContent maxH={"100vh"}>
            <DrawerCloseButton />
            <DrawerHeader>
              <Flex onClick={onClose}>
                <Logo />
              </Flex>
            </DrawerHeader>
            <Divider />

            <DrawerBody bg={"red.700"} className="test">
              <Stack
                className="test2"
                color={"white"}
                p={4}
                display={{ lg: "none" }}
              >
                {menus.map((navItem) => (
                  <MobileNavItem
                    key={navItem.title}
                    {...navItem}
                    onClose={onClose}
                  />
                ))}
              </Stack>
              <Box onSubmit={onClose}>
                <FormInputs />
              </Box>

              <HStack py={4} spacing={2} display={{ base: "flex", lg: "flex" }}>
                <SocialButton
                  bagr="transparent"
                  label={"Facebook"}
                  href={"https://www.facebook.com/TNUElearning"}
                >
                  <FaFacebook color="white" />
                </SocialButton>
                <SocialButton
                  bagr="transparent"
                  label={"Zalo"}
                  href={"https://zalo.me/0846770022"}
                >
                  <SiZalo color="white" />
                </SocialButton>
              </HStack>
            </DrawerBody>
            <Divider />
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};
