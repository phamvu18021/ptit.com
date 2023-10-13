"use client";

import {
  Heading,
  IconButton,
  IconButtonProps,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Tooltip,
  Box,
  Text,
  HStack,
} from "@chakra-ui/react";
import { BiPhone } from "react-icons/bi";
import { BsMessenger } from "react-icons/bs";
import { MdEmail, MdRotate90DegreesCw, MdRotateRight } from "react-icons/md";
import { SiZalo } from "react-icons/si";
import { FormPoup2 } from "./FormContact";
import { transform } from "typescript";

export const BtnPhone = (props: IconButtonProps) => {
  return (
    <Tooltip label={"0941.010.044"} placement="left" bg={"red.500"} hasArrow>
      <IconButton
        icon={<BiPhone />}
        size="lg"
        borderRadius={"50% 0 0 50%"}
        color={"white"}
        bg={"red.500"}
        p={"8px"}
        as={"a"}
        href={"tel: 0914709118"}
        {...props}
      />
    </Tooltip>
  );
};

export const BtnZalo = (props: IconButtonProps) => {
  return (
    <Tooltip label={"Zalo chat"} placement="left" bg={"blue.500"} hasArrow>
      <IconButton
        icon={<SiZalo />}
        size="lg"
        borderRadius={"50% 0 0 50%"}
        color={"white"}
        bg={"blue.500"}
        p={"8px"}
        as={"a"}
        href={"https://zalo.me/0914709118"}
        {...props}
      />
    </Tooltip>
  );
};

export const BtnMes = (props: IconButtonProps) => {
  return (
    <Tooltip
      transition={"all 0.2s"}
      label={"Facebook messenger"}
      placement="left"
      bg={"blue.500"}
      hasArrow

    >
      <IconButton
        icon={<BsMessenger />}
        size="lg"
        borderRadius={"50% 0 0 50%"}
        color={"white"}
        bg={"blue.500"}
        p={"8px"}
        transition={"width ease .4s"}
        as={"a"}
        href={"https://www.facebook.com/groups/800071498531146?locale=vi_VN"}
        {...props}
      />
    </Tooltip>
  );
};

export const BtnEmail = (props: IconButtonProps) => {
  return (
    <Popover placement="left" trigger="hover">
      <PopoverTrigger>
        <HStack
          spacing={0}
          borderRadius={0}
          bg={"orange.500"}
          transform={"rotate(270deg)"}
        >
          {" "}
          <IconButton
            icon={<MdEmail />}
            size="lg"
            // rounded={""
            _hover={{}}
            color={"white"}
            bg={"orange.500"}
            p={"8px"}
            {...props}
          />
          <Text pr={2} color={"white"}>
            Tu van ngay
          </Text>
        </HStack>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader as={Heading} size={"md"} textAlign={"center"}>
          Để lại thông tin
        </PopoverHeader>
        <PopoverBody>
          <FormPoup2 />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
