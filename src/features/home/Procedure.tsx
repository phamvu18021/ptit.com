import { useModal } from "@/components/ModalContext";
import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FcMultipleDevices, FcPhone, FcSearch } from "react-icons/fc";

const featuresData = [
  {
    icon: <Icon as={FcSearch} w="125%" h="auto" />,
    title: "Chọn ngành bạn yêu thích",
    text: "Khám phá và lựa chọn các ngành học hấp dẫn của E-PTIT để khám phá tiềm năng của bạn",
    link: "/nganh-dao-tao",
    linkText: "XEM CÁC NGÀNH HỌC",
  },
  {
    icon: <Icon as={FcPhone} w="125%" h="auto" />,
    title: "Đăng kí tư vấn",
    text: "Trao đổi với thầy cô tư vấn qua hotline:0864.770.022",
    link: "/",
    linkText: "ĐĂNG KÝ TƯ VẤN",
  },
  {
    icon: <Icon as={FcMultipleDevices} w="125%" h="auto" />,
    title: "Nộp hồ sơ xét tuyển",
    text: "Hoàn thiện đầy đủ hồ sơ theo hướng dẫn của các thầy cô tư vấn",
    link: "/",
    linkText: "ĐĂNG KÝ XÉT TUYỂN",
  },
  {
    icon: <Icon as={AiOutlineMail} w="125%" h="auto" color={"green"} />,
    title: "Nhận kết quả trúng tuyển",
    text: "Học viện sẽ thông báo kết quả đến Email/SĐT đăng ký.Hãy chú ý check Mail và Số điện thoại để nhận thông tin về cố vấn học tập, thời gian khai giảng và nhập học nhé.",
    link: "/",
    linkText: "ĐĂNG KÝ XÉT TUYỂN",
  },
];
export const Procedure = () => {
  return (
    <Box bg={"#f6f6f7"} py={{ base: "16" }}>
      <Container maxW={"1728px"} margin={"0 auto"} pos={"relative"} zIndex={2} >
        <Heading fontSize={{ base: "25px", md: "32px", lg: "32px" }} textTransform={"uppercase"} color={"#B1040E"}>
          Quy trình tuyển sinh
        </Heading>
        <Divider borderBottomWidth={"3px"} borderBlockEndColor={"orange"} w={"200px"} padding={{ lg: "15px", base: "6px" }} />
        <SimpleGrid columns={{ base: 1, md: 1, lg: 4 }} spacing={{ base: 10, lg: 10 }} paddingTop={{ base: "30px", md: "40px" }} zIndex={0}>
          {featuresData.map((Proce, index) => (
            <Feature
              key={index}
              icon={Proce.icon}
              title={Proce.title}
              text={Proce.text}
              link={Proce.link}
              linkText={Proce.linkText}
            />
          ))}
        </SimpleGrid>
      </Container>
      <Container maxW={"1728px"} ><Divider borderBottomWidth={"3px"} borderBlockEndColor={"red"} w={"95%"} padding={{ lg: "15px", base: "6px" }} position={"relative"} top={"-200px"} /></Container>
    </Box>
  );
};

interface FeatureProps {
  title: string;
  text: string;
  icon: React.ReactElement;
  link: string;
  linkText: string;
}

const Feature = ({ title, text, icon, link, linkText }: FeatureProps) => {
  const { isOpen, onOpen, onClose } = useModal();

  return (
    <Stack bg={"#FFF"} w="100%" minH={"340px"} p={{ base: "10px", md: "20px", lg: "30px" }} spacing={7} >
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600} fontSize={{ base: "16px", md: "20px", lg: "24px" }}> {title}</Text>
      <Text color={"gray.600"}>{text}</Text>
      <Link href={link} onClick={()=>!isOpen && onOpen && onOpen()} >
        <Text color={"#00338d !important"} textDecoration={"underline"} fontWeight={"bold"} >{linkText}</Text>
      </Link>
     
    </Stack>
  );
};


