import { useModal } from "@/components/ModalContext";
import {
  Box,
  Container,
  Divider,
  Heading,
  SimpleGrid,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import Link from "next/link";
interface FeatureProps {
  title: string;
  text: string;
  link: string;
  linkText: string;
}

const Feature = ({ title, text, link, linkText }: FeatureProps) => {
  const { isOpen, onOpen, onClose } = useModal();
  return (
    <Box
      w={{ base: "100%", md: "100%", lg: "100%" }}
      minH={"337px"}
      p={{ base: "20px", md: "30px" }}
      margin={"0 auto"}
      boxShadow="sm"
      rounded="md"
      bg="white"
    >
      <Text fontWeight={600} fontSize="20px" minHeight="80px" textTransform="uppercase">
        {title}
      </Text>
      <Text color="gray.600" minHeight="118px">
        {text}
      </Text>
      <Link href={link} color="red" onClick={() => !isOpen && onOpen && onOpen()}>
        <Text color="#00338d !important" fontWeight="bold" borderRadius="3px" borderWidth="1px" borderColor="red" padding="15px 0" textAlign={"center"}>
          {linkText}
        </Text>
      </Link>

    </Box>
  );
};

const MethodDks = [
  {
    title: "Xét tuyển thẳng",
    text: "Đối với thí sinh đã có bằng cao đẳng, đại học chính quy.",
    link: "/#",
    linkText: "NỘP HỌC BẠ ONLINE",
  },
  {
    title: "Xét tuyển bằng điểm thi THPT",
    text: "Sử dụng kết quả thi trung học phổ thông 2022, 2023.",
    link: "/#",
    linkText: "ĐĂNG KÍ TƯ VẤN",
  },
  {
    title: "Xét tuyển bằng học bạ",
    text: "Sử dụng kết quả 3 năm học THPT với các môn tương ứng với tổ hợp môn xét tuyển.",
    link: "/#",
    linkText: "ĐĂNG KÍ TƯ VẤN",
  },

];

export const MethodDk = () => {
  return (
    <Box bg="#f6f6f7">
      <Container maxW="1728px" py={{ base: 0, md: 0, lg: 20 }}>
        <Heading
          fontSize={{ base: "25px", md: "32px", lg: "32px" }}
          textTransform="uppercase"
          color="#B1040E"
        >
          Phương thức tuyển sinh
        </Heading>
        <Divider
          borderBottomWidth="3px"
          borderBlockEndColor="orange"
          w={{ base: "200px", lg: "400px" }}
          padding={{ lg: "15px", base: "6px" }}
        />
        <SimpleGrid columns={{ base: 1, md: 1, lg: 3 }} spacing={{ base: 10, lg: 5 }} paddingTop={{ base: "30px", md: "40px" }}>
          {MethodDks.map((Met, index) => (
            <Feature
              key={index}
              title={Met.title}
              text={Met.text}
              link={Met.link}
              linkText={Met.linkText}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

