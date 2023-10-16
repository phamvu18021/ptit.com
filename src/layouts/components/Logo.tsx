import { Heading, VStack, Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      style={{ display: "flex", alignItems: "center", gap: "4px" }}
    >
      <Image
        priority
        width={70}
        height={70}
        // style={{ borderRadius: "50%" }}
        src={`/logo-dhthainguyen.png`}
        alt="logo Đại học Thái nguyên"
      />
      <VStack color={"red.600"}>
        <Box maxW={"25rem"}>
          <Heading
            as="h2"
            size={"lg"}
            // justifyContent={"center"}
            // alignItems={"center"}
            textAlign={"center"}
          >
            HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG
          </Heading>
        </Box>
      </VStack>
    </Link>
  );
};
