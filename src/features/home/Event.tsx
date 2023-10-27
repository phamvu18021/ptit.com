"use client";

import { CardBlog } from "@/components/CardBlog";
import { HeadSection } from "@/components/HeadSection";
import {
  Button,
  Container,
  GridItem,
  HStack,
  Heading,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";
import Link from "next/link";

export const Event = ({ news, notifis }: { news: any[]; notifis: any[] }) => {
  return (
    <Container maxW={"1728px"} py={"64px"}>
      <Heading
        fontSize={{ base: "25px", md: "32px", lg: "32px" }}
        textTransform={"uppercase"}
        color={"#B1040E"}
      >
        BẢN TIN TUYỂN SINH TRƯỜNG ĐẠI HỌC UMT
      </Heading>
      <Divider
        borderBottomWidth={"3px"}
        borderBlockEndColor={"orange"}
        w={"200px"}
        padding={{ lg: "15px", base: "6px" }}
      />
      <SimpleGrid columns={{ base: 1, md: 2 }} pt={"24px"} spacing={"8"}>
        <GridItem>
          <Heading
            as={"h3"}
            size={{ base: "sm", lg: "md" }}
            borderBottom={"1px solid"}
            borderColor={"gray.100"}
            textAlign={{ base: "center", lg: "left" }}
            color={"blue.800"}
          >
            Tin tức
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} gap={"24px"}>
            {news?.map((post, index) => (
              <CardBlog
                key={index}
                image={post?.featured_image || ""}
                title={post?.title?.rendered || ""}
                desc={post?.excerpt?.rendered || ""}
                path={`/tin-tuc/${post.slug}`}
              />
            ))}
          </SimpleGrid>
        </GridItem>
        {notifis?.length > 0 && (
          <GridItem>
            <Heading
              as={"h3"}
              size={{ base: "sm", lg: "md" }}
              textAlign={{ base: "center", lg: "right" }}
              borderBottom={"1px solid"}
              borderColor={"gray.100"}
              color={"blue.800"}
            >
              Thông báo
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} gap={"24px"}>
              {notifis?.map((post, index) => (
                <CardBlog
                  key={index}
                  image={post?.featured_image || ""}
                  title={post?.title?.rendered || ""}
                  desc={post?.excerpt?.rendered || ""}
                  path={`/tin-tuc/${post.slug}`}
                />
              ))}
            </SimpleGrid>
          </GridItem>
        )}
      </SimpleGrid>

      <HStack justify={"center"}>
        <Button
          as={Link}
          href={"/tin-tuc"}
          colorScheme={"#064121"}
          variant={"link"}
          fontSize={{ base: "md", md: "xl" }}
        >
          Xem tất cả
        </Button>
      </HStack>
    </Container>
  );
};
