"use client";

import { FormMain, FormMain2 } from "@/components/FormContact";
import { categotys } from "@/features/home/Categorys";
import { formatDate } from "@/ultil/date";
import xss from "xss";
import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  HStack,
  Stack,
  Grid,
  Input,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { BiLogoTiktok } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { useCallback, useEffect, useState } from "react";
import { Loading } from "@/components/Loading";
import { CardBlogVert } from "@/components/CardBlogVert";
import { useRouter } from "next/router";

export const Item = ({
  path,
  image,
  title,
}: {
  path: string;
  image: string;
  title: string;
}) => {
  return (
    <Box
      as={Link}
      href={path || "/"}
      pos="relative"
      transition={"all ease .4s"}
      _hover={{ transform: "translateY(-10px)" }}
    >
      <Image
        priority
        width={700}
        height={400}
        src={image}
        alt={title}
        style={{ maxHeight: "150px", filter: "brightness(50%)" }}
      />
      <Box
        as={Flex}
        pos={"absolute"}
        top={0}
        left={"10%"}
        right={"40%"}
        bottom={0}
        align={"center"}
      >
        <Heading as={"h2"} size={"md"} color={"white"} textAlign={"center"}>
          {title}
        </Heading>
      </Box>
    </Box>
  );
};

export const Sidebar = ({
  sticky,
  typez,
}: {
  sticky?: string;
  typez?: string;
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedSearchQuery = encodeURI(searchQuery || "");
    router.push(`/search?s=${encodedSearchQuery}`);
  };

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/posts/?type=news&page=1`, {
          next: { revalidate: 3 },
        });

        const data: { posts: any[] } = await res.json();
        const { posts } = data;
        posts?.length && setPosts(posts);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    getPosts();
  }, []);

  // const gotoSearch = useCallback(
  //   () => {
  //     if(keyword.trim().length >0){

  //     },[keyword]
  //   }
  // )

  return (
    <Box px={4} pos={sticky ? "sticky" : "static"} top={sticky}>
      <Box>
        <form onSubmit={onSearch}>
          <HStack>
            <Input
              value={searchQuery}
              type="Text"
              border={"1px solid #BFBFBF "}
              borderRadius={0}
              px={4}
              placeholder="Tim kiem..."
              onChange={(e) => setSearchQuery(e.target.value)}
            />{" "}
            <Button borderRadius={0} onClick={onSearch}>
              Tim Kiem
            </Button>
          </HStack>
        </form>
      </Box>

      {typez && (
        <>
          {" "}
          <Box mt={2} justifyContent={"flex-start"}>
            <Text
              px={2}
              py={2}
              w={"-webkit-fit-content"}
              height={8}
              bg={"red.600"}
              color={"white"}
              textAlign={"start"}
            >
              {" "}
              Thông báo PTIT{" "}
            </Text>
            <Box borderBottom={"1px solid #ED1C24 "}></Box>
            <Box>
              {!isLoading && (
                <Stack direction={"column"} align={"center"}>
                  <>
                    <SimpleGrid
                      // pl={{ base: 2, lg: 24, md: 4 }}
                      // spacing={"4"}
                      columns={{ base: 1, md: 1, lg: 1 }}
                    >
                      {posts?.slice(0, 5).map((post: any, index: number) => (
                        <CardBlogVert
                          date={post?.date ? formatDate(post.date) : ""}
                          key={index}
                          title={post?.title?.rendered}
                          tag="Thông báo"
                          desc={xss(post.excerpt.rendered)}
                          image={post?.featured_image || ""}
                          path={`/tin-tuc/${post?.slug}`}
                        />
                      ))}{" "}
                    </SimpleGrid>
                    {posts?.length === 0 && (
                      <Grid placeItems={"center"} height={"40vh"}>
                        Dữ liệu đang được chúng tôi cập nhập
                      </Grid>
                    )}
                  </>
                </Stack>
              )}

              {isLoading && <Loading />}
            </Box>
          </Box>
          <Box pt={"24px"}>
            <Heading
              as={"h3"}
              size={"sm"}
              pb={"20px"}
              textAlign={{ base: "center", lg: "center" }}
            >
              ĐĂNG KÝ NGAY ĐỂ NHẬN TƯ VẤN
            </Heading>
            <FormMain2 />
          </Box>
        </>
      )}

      {!typez && (
        <>
          {" "}
          <Box pt={"24px"}>
            <Heading
              as={"h3"}
              size={"sm"}
              pb={"20px"}
              textAlign={{ base: "center", lg: "center" }}
            >
              ĐĂNG KÝ NGAY ĐỂ NHẬN TƯ VẤN
            </Heading>
            <div key={"f1"}>
              <FormMain2 />
            </div>
          </Box>
          <Box justifyContent={"flex-start"}>
            <Text
              px={2}
              py={2}
              w={"-webkit-fit-content"}
              height={8}
              bg={"red.600"}
              color={"white"}
              textAlign={"start"}
            >
              {" "}
              Thông báo PTIT{" "}
            </Text>
            <Box borderBottom={"1px solid #ED1C24 "}></Box>
            <Box>
              {!isLoading && (
                <Stack direction={"column"} align={"center"}>
                  <>
                    <SimpleGrid
                      // pl={{ base: 2, lg: 24, md: 4 }}
                      // spacing={"4"}
                      columns={{ base: 1, md: 1, lg: 1 }}
                    >
                      {posts?.slice(0, 5).map((post: any, index: number) => (
                        // <SwiperSlide key={index}>

                        <CardBlogVert
                          date={post?.date ? formatDate(post.date) : ""}
                          key={index}
                          title={post?.title?.rendered}
                          tag="Thông báo"
                          desc={xss(post.excerpt.rendered)}
                          image={post?.featured_image || ""}
                          path={`/tin-tuc/${post?.slug}`}
                        />

                        // </SwiperSlide>
                      ))}{" "}
                    </SimpleGrid>
                    {posts?.length === 0 && (
                      <Grid placeItems={"center"} height={"40vh"}>
                        Dữ liệu đang được chúng tôi cập nhập
                      </Grid>
                    )}
                  </>
                </Stack>
              )}

              {isLoading && <Loading />}
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};
