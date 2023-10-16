"use client";

import {
  Avatar,
  AvatarBadge,
  Box,
  Center,
  Flex,
  Heading,
  Img,
  Stack,
  Text,
  HStack,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import xss from "xss";

export const CardBlog = ({
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
      <Flex
        flexDir={"column"}
        justify={"space-between"}
        // w={"full"}
        bg={"white"}
        // boxShadow={"2xl"}
        rounded={"sm"}
        // p={6}
        overflow={"hidden"}
      >
        <Box>
          <Box
            bg={"gray.100"}
            mt={-6}
            mx={-6}
            mb={6}
            pos={"relative"}
            aspectRatio={320 / 160}
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
              <Box maxH={160}>
                <Image
                  width={500}
                  height={400}
                  src={image || `/blog.jpeg`}
                  style={{ maxHeight: imageH }}
                  alt={title}
                />
              </Box>
            )}
          </Box>
          <Stack>
            {/* <Box>
              {tag && (
                <Text
                  fontWeight={600}
                  fontSize={".8rem"}
                  bg={bgTag || "green.500"}
                  py={"6px"}
                  px={"12px"}
                  color={"white"}
                  as={"span"}
                  rounded={"md"}
                >
                  {tag}
                </Text>
              )}
            </Box> */}
            <Heading
              color={"gray.700"}
              as={"h3"}
              fontSize={{ base: "md", lg: "xl" }}
              fontWeight={"500"}
              mt={2}
              _hover={{ color: "red.400" }}
              css={{
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              dangerouslySetInnerHTML={{ __html: xss(title) }}
            />
            <Text fontSize={"xs"} mt={-2} color={"gray.500"}>
              {date?.slice(5)}
            </Text>
            {/* {isMounted && (
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
            )} */}
          </Stack>
        </Box>
        {/* <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Avatar bg={"teal.300"} size={"sm"}>
            <AvatarBadge boxSize="1.25em" bg="green.500" />
          </Avatar>
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>Admin</Text>
            <Text color={"gray.500"}>{date}</Text>
          </Stack>
        </Stack> */}
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
      // maxW={"324px"}
      // pos={"relative"}
      transition={"all ease .4s"}
      _hover={{ transform: "translateY(-6px)" }}
      className="card-blog"
    >
      <SimpleGrid
        columns={2}
        maxW={"600px"}
        spacing={4}
        // w={"full"}
        bg={"white"}
        // boxShadow={"2xl"}
      >
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
              <Box maxH={160}>
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
              color={"gray.700"}
              fontSize={{ base: "sm", lg: "xl" }}
              fontFamily={"body"}
              fontWeight={"600"}
              mt={2}
              _hover={{ color: "red.400" }}
              css={{
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              dangerouslySetInnerHTML={{ __html: xss(title) }}
            />
            <Text fontSize={"md"} mt={-2} color={"gray.600"}>
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
        </GridItem>
        <Box></Box>
      </SimpleGrid>
    </Box>
  );
};
