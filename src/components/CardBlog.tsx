"use client";

import {
  Box,
  Flex,
  Heading,
  Img,
  Stack,
  Text,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { clean } from "@/lib/sanitizeHtml";

export const CardBlog = ({
  image,
  title,
  desc,
  path,
  date,
  imageH,
}: {
  image?: string;
  title: string;
  desc: string;
  path: string;
  date?: string;
  imageH?: string;
}) => {
  const hasSSL = process.env.NEXT_PUBLIC_HAS_SSL || "true";

  const [isMounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);
  return (
    <Box
      as={Link}
      style={{ textDecoration: "none" }}
      href={path}
      py={4}
      px={6}
      transition={"all ease .4s"}
      _hover={{ transform: "translateY(-6px)" }}
      className="card-blog"
    >
      <Flex
        flexDir={"column"}
        justify={"space-between"}
        bg={"white"}
        rounded={"sm"}
        overflow={"hidden"}
      >
        <Box>
          <Box
            bg={"white"}
            mb={6}
            pos={"relative"}
            aspectRatio={508 / 338}
            overflow={"hidden"}
          >
            {hasSSL === "false" && (
              <Img
                src={image || `/blog.jpeg`}
                style={{ maxHeight: imageH }}
                alt={title}
              />
            )}
            {hasSSL === "true" && (
              <Box>
                <Image
                  width={508}
                  height={338}
                  src={image || `/blog.jpeg`}
                  style={{ maxHeight: imageH }}
                  alt={title}
                />
              </Box>
            )}
          </Box>
          <Stack>
            <Heading
              color={"facebook.800"}
              as={"h3"}
              fontSize={{ base: "md", lg: "xl" }}
              fontWeight={"600"}
              mt={2}
              _hover={{ color: "red.500" }}
              css={{
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              dangerouslySetInnerHTML={{ __html: clean(title) }}
            />
            <Text fontSize={"md"} mt={-2} color={"facebook.600"}>
              {date?.slice(5)}
            </Text>
            {isMounted && (
              <Text
                color={"gray.500"}
                fontSize={".8rem"}
                css={{
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                dangerouslySetInnerHTML={{ __html: desc }}
              />
            )}
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export const CardBlogS = ({
  image,
  title,
  desc,
  path,
  tag,
  bgTag,
  date,
  imageH,
}: {
  image?: string;
  title: string;
  desc: string;
  path: string;
  tag?: string;
  bgTag?: string;
  date?: string;
  imageH?: string;
}) => {
  const hasSSL = process.env.NEXT_PUBLIC_HAS_SSL || "true";

  const [isMounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <Box
      as={Link}
      style={{ textDecoration: "none" }}
      href={path}
      py={4}
      px={6}
      transition={"all ease .4s"}
      _hover={{ transform: "translateY(-6px)" }}
      className="card-blog"
    >
      <SimpleGrid columns={2} spacing={4} bg={"white"}>
        <GridItem colSpan={1}>
          <Box bg={"gray.100"} overflow={"hidden"}>
            {hasSSL === "false" && (
              <Img
                src={image || `/blog.jpeg`}
                style={{ maxHeight: imageH }}
                alt={title}
              />
            )}
            {hasSSL === "true" && (
              <Box>
                <Image
                  width={504}
                  height={320}
                  src={image || `/blog.jpeg`}
                  style={{ maxHeight: imageH }}
                  alt={title}
                />
              </Box>
            )}
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Stack>
            <Heading
              className="event-heading"
              color={"facebook.700"}
              fontSize={{ base: "sm", lg: "xl" }}
              fontFamily={"body"}
              fontWeight={"600"}
              _hover={{ color: "red.400" }}
              css={{
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              dangerouslySetInnerHTML={{ __html: clean(title) }}
            />
            <Text fontSize={"md"} pb={1} color={"gray.400"}>
              {date?.slice(5)}
            </Text>
            {isMounted && (
              <Text
                color={"gray.500"}
                fontSize={".9rem"}
                css={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                dangerouslySetInnerHTML={{ __html: desc }}
              />
            )}
          </Stack>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};
