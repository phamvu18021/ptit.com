"use client";

import {
  Box,
  Container,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      fontWeight={"500"}
      fontSize={"lg"}
      mb={2}
      borderBottom={"1px white solid"}
    >
      {children}
    </Text>
  );
};

export const Footer = () => {
  return (
    <>
      <Box bg={"blue.900"} color={"White"}>
        <Container as={Stack} maxW={"8xl"} py={10}>
          <SimpleGrid columns={{ base: 1, lg: 3, md: 3 }} spacing={16}>
            <Stack>
              <Stack direction={"row"} align={"flex-start"} gap={5} mb={5}>
                <Image
                  src={"/Logo_PTIT_University.png"}
                  width={150}
                  height={100}
                  alt="Tìm đối tác"
                  style={{ float: "left" }}
                  // style={{ borderRadius: "6px" }}
                />

                <Text fontWeight={"500"} fontSize={"2xl"} mb={2} mt={5}>
                  HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG
                </Text>
              </Stack>

              <Box py={2}>Email: hotro.bcvt.edu.vn@gmail.com</Box>
              <Box
                py={2}
                fontSize={"14px"}
                as={Link}
                href={"https://www.facebook.com/groups/835191238124628"}
              >
                Group:https://www.facebook.com/groups/835191238124628
              </Box>

              <Box
                py={2}
                as={Link}
                href={"https://www.facebook.com/bcvt.edu.vn/"}
              >
                Fanpage:https://www.facebook.com/bcvt.edu.vn/
              </Box>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>DANH SÁCH NGÀNH HỌC</ListHeader>
              <Box as={Link} href={"/nganh-quan-tri-kinh-doanh"}>
                Quản trị kinh doanh
              </Box>
              <Box as={Link} href={"/nganh-cong-nghe-thong-tin"}>
                Công nghệ thông tin
              </Box>
              <Box as={Link} href={"/nganh-ky-thuat-dien-tu-vien-thong"}>
                Kỹ thuật Điện tử Viễn thông
              </Box>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>HỢP TÁC TUYỂN SINH</ListHeader>
              <Box as={Link} href={"#"}>
                Trạm tuyển sinh:
              </Box>
              <UnorderedList>
                <ListItem>
                  Hà Nội: Số 116 Trần Vĩ, Phường Mai Dịch, Quận Cầu Giấy, Thành
                  Phố Hà Nội
                </ListItem>
              </UnorderedList>
              <Box as={Link} href={"tel:0846770022"}>
                Hotline: 0846770022
              </Box>
              <Link href={"https://timdoitac.aum.edu.vn/"}>
                <Image
                  src={"/timdoitac.jpg"}
                  width={300}
                  height={100}
                  alt="Tìm đối tác"
                  style={{ borderRadius: "6px" }}
                />
              </Link>
            </Stack>
          </SimpleGrid>
        </Container>

        <Box borderTopWidth={1} borderStyle={"solid"} borderColor={"gray.200"}>
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ md: "center" }}
            align={{ md: "center" }}
          >
            <Text textAlign="center">© 2023 Copyright by IT AUM</Text>
          </Container>
        </Box>
      </Box>
    </>
  );
};
