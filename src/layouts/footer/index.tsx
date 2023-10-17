"use client";

import { FormPoup } from "@/components/FormContact";
import { ModalBase } from "@/components/Modal";
import {
  Box,
  Container,
  Flex,
  GridItem,
  Heading,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  UnorderedList,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { InputRes } from "../../components/InputRes";

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

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export const Footer = () => {
  const { onToggle, onOpen, onClose, isOpen } = useDisclosure();
  return (
    <>
      <Box bg={"facebook.800"} color={"White"}>
        <Container as={Stack} maxW={"8xl"} py={10}>
          {/* <Flex justify="center" align={"center"} direction="column" mb="32px">
            <Heading size="md" textAlign="center" mb={4}>
              Đăng ký nhận tư vấn
            </Heading>
            <Box maxW="md">
              <InputRes
                placeholder="Nhập email để đăng ký"
                label="Đăng ký"
                onClick={onToggle}
              />
            </Box>
          </Flex> */}
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
              <Box as={Link} href={"#"}>
                Trụ sở chính:
              </Box>
              <UnorderedList>
                <ListItem>122 Hoàng Quốc Việt, Q.Cầu Giấy, Hà Nội.</ListItem>
              </UnorderedList>

              <Box
                as={Link}
                href={"https://bcvt.edu.vn/"}
                textDecor={"underline"}
              >
                Website: bcvt.edu.vn
              </Box>

              <Box
                as={Link}
                href={"https://www.facebook.com/bcvt.edu.vn"}
                textDecor={"underline"}
              >
                Fanpage: www.facebook.com/bcvt.edu.vn
              </Box>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>DANH SÁCH NGÀNH HỌC</ListHeader>
              <Box as={Link} href={"/gioi-thieu"}>
                Quản trị kinh doanh
              </Box>
              <Box as={Link} href={"/lich-khai-giang"}>
                Công nghệ thông tin
              </Box>
              <Box as={Link} href={"/dang-ky"}>
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
                {/* <ListItem>
                  Hồ Chí Minh: Số 91 Ký Con, phường Nguyễn Thái Bình, Quận 1, TP
                  Hồ Chí Minh
                </ListItem> */}
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

            {/* 
            <Stack align={"flex-start"}>
              <ListHeader>Mạng xã hội</ListHeader>
              <Stack direction={"row"} spacing={6}>
                <SocialButton
                  label={"Facebook"}
                  href={"https://www.facebook.com/TNUElearning"}
                >
                  <FaFacebook />
                </SocialButton>
                <SocialButton
                  label={"Tiktok"}
                  href={"https://www.tiktok.com/@tnuelearning?"}
                >
                  <FaTiktok />
                </SocialButton>
              </Stack>
            </Stack> */}
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
      {/* <ModalBase isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <FormPoup title="Để lại thông tin" />
      </ModalBase> */}
    </>
  );
};
