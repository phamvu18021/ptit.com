// "use client";

// import { CardBlog } from "@/components/CardBlog";
// import { formatDate } from "@/ultil/date";
// import {
//   Container,
//   Grid,
//   SimpleGrid,
//   GridItem,
//   Stack,
//   Box,
//   Text,
//   background,
// } from "@chakra-ui/react";
// import styled from "@emotion/styled";
// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import xss from "xss";
// import { useSize } from "../../hooks/useSizeWindow";
// import { Loading } from "@/components/Loading";
// import { LayoutBottom } from "@/layouts/layoutPosts/LayoutBottom";
// import { Button } from "@chakra-ui/react";
// // export const StyledContainer = styled(Container)`
// //   .mySwiper {
// //     padding-bottom: 38px;
// //   }

// //   .swiper-slide {
// //     height: 550px;
// //   }
// // `;

// export const SLiderPosts = () => {
//   // const { size } = useSize();
//   // const searchParams = useSearchParams();
//   // const page = searchParams.get("page") || "1";

//   const [posts, setPosts] = useState<any[]>([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const getPosts = async () => {
//       setIsLoading(true);
//       try {
//         const res = await fetch(`/api/posts/?type=news&page=1`, {
//           next: { revalidate: 3 },
//         });

//         const data: { posts: any[] } = await res.json();
//         const { posts } = data;
//         posts?.length && setPosts(posts);
//       } catch (error) {
//         console.log(error);
//       }
//       setIsLoading(false);
//     };

//     getPosts();
//   }, []);

//   return (
//     <LayoutBottom sticky="120px">
//       {/* <StyledContainer > */}
//         <Box maxW="8xl">
//            {!isLoading && (
//           // <Swiper
//           //   slidesPerView={
//           //     (size.width < 480 && 1) || (size.width < 992 && 2) || 3
//           //   }
//           //   spaceBetween={30}
//           //   pagination={{
//           //     clickable: true,
//           //   }}
//           //   modules={[Pagination]}
//           //   className="mySwiper"
//           // >
//             <Stack direction={"column"} align={"center"}>
//               <Box mb={8}>
//                 <Text textAlign={"center"} fontSize={"3xl"} fontWeight={"600"}>
//                   Tin tức PTIT
//                 </Text>
//                 <Text textAlign={"center"}>
//                   Những câu chuyện về con người,nghiên cứu và đổi mới trên khắp
//                 </Text>
//               </Box>
//               <>
//                 <SimpleGrid
//                   pl={{base:2 , lg:24,md :4}}
//                   spacing={"4"}
//                   columns={{ base: 1, md: 2, lg: 4 }}
//                 >
//                   {posts?.map((post: any, index: number) => (
//                     // <SwiperSlide key={index}>

//                     <CardBlog
//                       date={post?.date ? formatDate(post.date) : ""}
//                       key={index}
//                       title={post?.title?.rendered}
//                       tag="Thông báo"
//                       desc={xss(post.excerpt.rendered)}
//                       image={post?.featured_image || ""}
//                       path={`/tin-tuc/${post?.slug}`}
//                     />

//                     // </SwiperSlide>
//                   ))}{" "}
//                 </SimpleGrid>
//                 {posts?.length === 0 && (
//                   <Grid placeItems={"center"} height={"40vh"}>
//                     Dữ liệu đang được chúng tôi cập nhập
//                   </Grid>
//                 )}
//               </>

//               <Box>
//                 <Button
//                   // textAlign={"center"}
//                   bg={"red"}
//                   color={"white"}
//                   // padding={"8px 16px"}
//                   _hover={{
//                       background:"#C9113F",
//                   }

//                   }
//                 >
//                   Thêm tin tức về PTIT
//                 </Button>
//               </Box>
//             </Stack>
//           // </Swiper>
//         )}

//         {isLoading && <Loading />}
//         </Box>
// {/*
//       </StyledContainer> */}
//     </LayoutBottom>
//   );
// };

// // "use client";

// // import { CardBlog } from "@/components/CardBlog";
// // import { formatDate } from "@/ultil/date";
// // import { Container, Grid } from "@chakra-ui/react";
// // import styled from "@emotion/styled";
// // import { useSearchParams } from "next/navigation";
// // import { useEffect, useState } from "react";
// // import "swiper/css";
// // import "swiper/css/pagination";
// // import { Pagination } from "swiper/modules";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import xss from "xss";
// // import { useSize } from "../../hooks/useSizeWindow";
// // import { Loading } from "@/components/Loading";

// // export const StyledContainer = styled(Container)`
// //   .mySwiper {
// //     padding-bottom: 38px;
// //   }

// //   .swiper-slide {
// //     height: 550px;
// //   }
// // `;

// // export const SLiderPosts = () => {
// //   const { size } = useSize();
// //   const searchParams = useSearchParams();
// //   const page = searchParams.get("page") || "1";

// //   const [posts, setPosts] = useState<any[]>([]);
// //   const [isLoading, setIsLoading] = useState(true);

// //   useEffect(() => {
// //     const getPosts = async () => {
// //       setIsLoading(true);
// //       try {
// //         const res = await fetch(`/api/posts/?type=notifis&page=${page}`, {
// //           next: { revalidate: 3 },
// //         });

// //         const data: { posts: any[] } = await res.json();
// //         const { posts } = data;
// //         posts?.length && setPosts(posts);
// //       } catch (error) {
// //         console.log(error);
// //       }
// //       setIsLoading(false);
// //     };

// //     getPosts();
// //   }, [page]);

// //   return (
// //     <StyledContainer maxW="6xl">
// //       {!isLoading && (
// //         <Swiper
// //           slidesPerView={
// //             (size.width < 480 && 1) || (size.width < 992 && 2) || 3
// //           }
// //           spaceBetween={30}
// //           pagination={{
// //             clickable: true,
// //           }}
// //           modules={[Pagination]}
// //           className="mySwiper"
// //         >
// //           {posts?.map((post: any, index: number) => (
// //             <SwiperSlide key={index}>
// //               <CardBlog
// //                 date={post?.date ? formatDate(post.date) : ""}
// //                 key={index}
// //                 title={post?.title?.rendered}
// //                 tag="Thông báo"
// //                 desc={xss(post.excerpt.rendered)}
// //                 image={post?.featured_image || ""}
// //                 path={`/tin-tuc/${post?.slug}`}
// //               />
// //             </SwiperSlide>
// //           ))}
// //           {posts?.length === 0 && (
// //             <Grid placeItems={"center"} height={"40vh"}>
// //               Dữ liệu đang được chúng tôi cập nhập
// //             </Grid>
// //           )}
// //         </Swiper>
// //       )}

// //       {isLoading && <Loading />}
// //     </StyledContainer>
// //   );
// // };
