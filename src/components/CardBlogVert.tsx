"use client";

import {
  Box,
  Button,
  // Card,
  CardBody,
  CardFooter,
  HStack,
  Heading,
  Img,
  Stack,
  Tag,
  Text,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import xss from "xss";

export const CardBlogVert = ({
  title,
  desc,
  date,
  tag,
  image,
  path,
}: {
  date?: string;
  title: string;
  desc: string;
  tag: string;
  image?: string;
  path?: string;
}) => {
  const hasSSL = process.env.NEXT_PUBLIC_HAS_SSL || "true";

  const [isMounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <Box
      py={4}
      // overflow="hidden"
      // variant="outline"
      // rounded={"sm"}
      as={Link}
      href={path ?? "#"}
      border={"none"}
    >
      <SimpleGrid columns={3}>
        <GridItem colSpan={1}>
          <Box objectFit={"cover"}>
            {hasSSL === "true" && (
              <Image
                width={110}
                height={70}
                src={image || `/blog.jpeg`}
                alt={title}
              />
            )}

            {hasSSL === "false" && (
              <Img src={image || `/blog.jpeg`} alt={title} />
            )}
          </Box>
        </GridItem>
        <GridItem colSpan={2}>
          <Stack>
            <Text
              fontSize={"14px"}
              fontWeight={500}
              _hover={{ color: "red.500" }}
              transition={"all ease .3s"}
              css={{
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              dangerouslySetInnerHTML={{ __html: xss(title) }}
            />
            <HStack pt={-2}>
              <Text
                p={1}
                align={"center"}
                fontSize={"10px"}
                w={"-webkit-fit-content"}
                height={5}
                bg={"black"}
                color={"white"}
              >
                {tag}
              </Text>
              <Text p={1} align={"center"} fontSize={"xs"} color={"gray.500"}>
                {date?.slice(5)}
              </Text>
            </HStack>
          </Stack>
        </GridItem>
      </SimpleGrid>

      {/* {isMounted && (
            <Text
              color={"gray.500"}
              fontSize={".8rem"}
              dangerouslySetInnerHTML={{ __html: desc }}
            />
          )} */}
    </Box>
  );
};
