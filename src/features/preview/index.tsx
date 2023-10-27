"use client";

import { CardBlog } from "@/components/CardBlog";
import { HeadSection } from "@/components/HeadSection";
import { clean } from "@/lib/sanitizeHtml";
import { formatDate } from "@/ultil/date";
import { Box, Center, Container, GridItem, SimpleGrid } from "@chakra-ui/react";

export const Previews = ({ posts }: { posts?: any[] }) => {
  if (!posts || posts?.length === 0)
    return (
      <Container maxW={"6xl"} py={{ base: "32px", md: "48px" }}>
        <Center minH={"50vh"}>Không có bài viết nào mới xuất bản</Center>
      </Container>
    );

  return (
    <Box>
      <Container maxW={"6xl"} py={{ base: "32px", md: "48px" }}>
        <HeadSection subtitle="xem trước" />
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={{ base: "16px", md: "24px" }}
        >
          {posts?.map((post, index) => (
            <GridItem key={index}>
              <CardBlog
                date={post?.date ? formatDate(post.date) : ""}
                key={index}
                title={post?.title?.rendered}
                desc={clean(post?.excerpt?.rendered)}
                image={post?.featured_image || ""}
                path={`/xem-truoc/${post?.slug}`}
              />
            </GridItem>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
