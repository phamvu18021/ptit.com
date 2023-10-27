"use client";

import { Box, Center, Flex, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
export const CardReg = ({ image, desc, title }: { image?: string; desc: string; title: string }) => {
  return (
    <Center
      style={{ textDecoration: "none" }}
      pos={"relative"}
      transition={"all ease .4s"}
      className="card-blog"
      h={"100%"}
      paddingTop={{ base: "10px" }}
    >
      <Flex
        flexDir={"column"}
        justify={"space-between"}
        maxW={"700px"}
        w={"full"}
        bg={"white"}

        overflow={"hidden"}
        h={"100%"}
      >
        <Box>
          <Box bg={"gray.100"} pos={"relative"}>
            <Image
              width={431}
              height={288}
              src={image || `/blog.jpg`}
              priority
              alt={""}
              style={{ width: "100%" }}
            />
          </Box>
          <Stack>
            <Text
              color={"BlackAlpha"}
              fontSize={{ lg: "1.25rem", base: "sm" }}
              fontWeight={"bold"}
              lineHeight={"1.6"}
              mt={"15px"}
              textTransform={"uppercase"}

              dangerouslySetInnerHTML={{ __html: desc }}
            />
            <Text>{title}</Text>
          </Stack>
        </Box>
      </Flex>
    </Center>
  );
};
