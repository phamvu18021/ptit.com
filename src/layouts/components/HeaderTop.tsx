import { HStack, Icon, Link, Tag, TagLabel } from "@chakra-ui/react";
import { ReactNode } from "react";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { Search } from "./Search";
import { Logo } from "./Logo";

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
      bg={"linear-gradient(70deg, #f68920 0%, #fc5934 100%)"}
      py="8px"
      px="8px"
      as={Link}
      href={`${type}:${label}`}
    >
      {children}
      <TagLabel fontSize={{ base: ".6rem", md: "sm" }}>{label}</TagLabel>
    </Tag>
  );
};

export const HeaderTop = ({ hasSearch }: { hasSearch?: boolean }) => {
  return (
    <HStack align={"center"} justify={"space-between"}>
      <HStack flex={1}>
        <Tags type="tel" label="0914709118">
          <Icon as={LuPhone} />
        </Tags>

        <Tags type="mailto" label="daihoctructuyen@tnu.edu.vn">
          <Icon as={MdOutlineMail} />
        </Tags>
      </HStack>

      <HStack
        flex={1}
        justify={"center"}
        display={{ base: "none", lg: "flex" }}
      >
        <Logo />
      </HStack>

      {hasSearch && (
        <HStack flex={1} justify={"end"}>
          <Search />
        </HStack>
      )}
    </HStack>
  );
};
