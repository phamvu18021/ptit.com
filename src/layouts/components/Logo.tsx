import { Heading, VStack, Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      style={{ display: "flex", alignItems: "center", gap: "8px" }}
    >
      <Image
        priority
        width={70}
        height={70}
        src={`/logo-dhthainguyen.png`}
        alt="logo HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG"
      />
      <VStack>
        <Box maxW={"40rem"}>
          <Heading
            color={"red.600"}
            as="h2"
            size={{ lg: "sm", base: "xs" }}
            textAlign={"center"}
          >
            HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG
          </Heading>
          <Heading
            mt={1}
            color={"black"}
            as="h2"
            display={{ lg: "contents", base: "none" }}
            size={{ lg: "xs", base: "xs" }}
            textAlign={"center"}
          >
            Posts and Telecommunications Institute of Technology
          </Heading>
        </Box>
      </VStack>
    </Link>
  );
};
