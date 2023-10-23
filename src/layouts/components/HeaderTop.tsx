import {
  HStack,
  Icon,
  IconButton,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { Search } from "./Search";
import { Logo } from "./Logo";
import { FaFacebook } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import {
  Stack,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { FormInputs } from "@/components/FormInputs";
import { SearchIcon } from "@chakra-ui/icons";
export const SocialButton = ({
  children,
  label,
  href,
  bagr,
}: {
  children: ReactNode;
  label: string;
  href: string;
  bagr: string;
}) => {
  return (
    <chakra.button
      bg={bagr}
      rounded={"md"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      border={"1.8px solid white"}
      // transition={"background 0.3s ease"}
      // _hover={{
      //   bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      // }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};
export const Tags = ({
  label,
  type,
  children,
}: {
  label: string;
  type: string;
  children: ReactNode;
}) => {
  return (
    <Tag
      borderRadius="full"
      variant="solid"
      bg={"transparent"}
      py="4px"
      px="4px"
      as={Link}
      href={`${type}:${label}`}
    >
      {children}
      <TagLabel fontSize={{ base: ".6rem", md: "sm" }}>{label}</TagLabel>
    </Tag>
  );
};

export const HeaderTop = () => {
  return (
    <HStack
      align={"center"}
      justify={{ base: "end", lg: "space-between" }}
      py={1}
    >
      <HStack spacing={2} display={{ base: "none", lg: "flex" }}>
        <SocialButton
          bagr={"transparent"}
          label={"Facebook"}
          href={"https://www.facebook.com/bcvt.edu.vn"}
        >
          <FaFacebook color="white" />
        </SocialButton>
        <SocialButton
          bagr={"transparent"}
          label={"Zalo"}
          href={"https://zalo.me/0846770022"}
        >
          <SiZalo color="white" />
        </SocialButton>
      </HStack>

      <HStack
        w={{ base: "100vw", lg: "-moz-fit-content" }}
        // maxW={{base :'21vw'}}
        display="flex"
        justifyContent={{ base: "space-between", lg: "flex-end" }}
      >
        <Stack direction={"row"}>
          <Tags type="tel" label="0846770022">
            <Icon as={LuPhone} />
          </Tags>

          <Tags type="mailto" label="hotro.bcvt.edu.vn@gmail.com">
            <Icon as={MdOutlineMail} />
          </Tags>
        </Stack>

        <Popover placement="bottom">
          <PopoverTrigger>
            <IconButton
              size="xl"
              color="whiteAlpha.900"
              _hover={{}}
              pl={4}
              bg="transparent"
              aria-label="Search database"
              icon={<SearchIcon w="1em" h="1em" />}
              borderRadius={"0"}
            />
          </PopoverTrigger>
          <PopoverContent p={5}>
            <FormInputs />
          </PopoverContent>
        </Popover>
      </HStack>

      {/* <HStack
        flex={1}
        justify={"center"}
        display={{ base: "none", lg: "flex" }}
      >
        <Logo />
      </HStack> */}
      {/* 
      {hasSearch && (
        <HStack flex={1} justify={"end"}>
          <Search />
        </HStack>
      )} */}
    </HStack>
  );
};
