import { menus } from "@/router";
import {
  Box,
  Flex,
  Icon,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
  Stack,
  Text,
  Input,
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import { useState, useEffect } from "react";
import { BtnTheme } from "@/components/BtnTheme";
import { ModalBase } from "@/components/Modal";
import { FormPoup } from "@/components/FormContact";
import { FormInputs } from "@/components/FormInputs";
interface INavItem {
  title: string;
  children?: Array<INavItem>;
  path?: string;
}

export const DesktopNav = () => {
  // const [active, setActive] = useState("hidden");
  const linkColor = "#000000";
  const linkHoverColor = "#FA692E";
  const popoverContentBgColor = "white";
  const { onToggle, onOpen, onClose, isOpen } = useDisclosure();
  return (
    <>
      <Stack direction={"column"}>
        <Stack
          direction={"row"}
          justifyContent={"flex-end"}
          alignItems={"flex-end"}
          // paddingRight={14}
        >
          <BtnTheme
            color={"white"}
            colorScheme="red"
            size={{ base: "sm", md: "lg" }}
            onClick={onToggle}
          >
            Đăng ký tư vấn
          </BtnTheme>
          <>
            {/* <Popover
            placement="bottom"
          >
            <PopoverTrigger>
              <IconButton alignItems={"center"} 
              border={"1px solid black"}
              aria-label="Search database" icon={<SearchIcon />} />
            </PopoverTrigger>
            <PopoverContent p={5}>
              <Form />
            </PopoverContent>
          </Popover> */}
          </>
        </Stack>

        <Stack direction={"row"} spacing={8} alignItems={"center"}>
          {menus.map((navItem) => (
            <Box key={navItem.title}>
              <Popover trigger={"hover"} placement={"bottom-start"}>
                <PopoverTrigger>
                  <Box
                    // onClickCapture={() => setActive("")}

                    as={Link}
                    p={2}
                    href={navItem.path ?? "#"}
                    fontSize={"0.9rem"}
                    fontWeight={700}
                    color={linkColor}
                    _hover={{
                      // textDecoration: "underline  1px solid black",
                      color: linkHoverColor,
                    }}
                  >
                    {navItem.title}
                  </Box>
                </PopoverTrigger>

                {navItem.childs && (
                  <PopoverContent
                    border={0}
                    boxShadow={"xl"}
                    bg={popoverContentBgColor}
                    p={4}
                    rounded={"xl"}
                    minW={"sm"}
                    maxW={300}
                  >
                    <Stack>
                      {navItem.childs.map((child) => (
                        <DesktopSubNav key={child.title} {...child} />
                      ))}
                    </Stack>
                  </PopoverContent>
                )}
              </Popover>
            </Box>
          ))}

          <Popover
            // isOpen={isOpen}
            // onOpen={onOpen}
            // onClose={onClose}
            placement="bottom"
          >
            <PopoverTrigger>
              <IconButton aria-label="Search database" icon={<SearchIcon />} />
            </PopoverTrigger>
            <PopoverContent p={5}>
              <FormInputs />
            </PopoverContent>
          </Popover>
        </Stack>
      </Stack>
      <ModalBase isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <FormPoup title="Để lại thông tin" />
      </ModalBase>
    </>
  );
};

export const DesktopSubNav = ({ title, path }: INavItem) => {
  return (
    <Box
      as={Link}
      href={path}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: "pink.50" }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            color={"#054659"}
            _groupHover={{ color: "#FA692E" }}
            fontWeight={600}
          >
            {title}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"#FA692E"} w={5} h={5} as={BsChevronRight} />
        </Flex>
      </Stack>
    </Box>
  );
};
