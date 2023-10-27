"use client";
import { CardReg } from "@/components/CardReg";
import { FormMain } from "@/components/FormContact";
import { Box, Container, Divider, Heading, SimpleGrid } from "@chakra-ui/react";

export const Reg = [
  {
    image: "/1.png",
    desc: "Học sinh tốt nghiệp cấp 3, muốn đi làm ngay để lấy kinh nghiệm và kiếm thêm thu nhập",
    title: ``,
  },
  {
    image: "/2.png",
    desc: "Sinh viên muốn học thêm để lấy văn bằng thứ hai",
    title: ``,
  },
  {
    image: "/3.png",
    desc: "Người chưa có bằng đại học muốn học bổ sung",
    title: ``,
  },
  {
    image: "/4.png",
    desc: "Người đã đi làm muốn học thêm một văn bằng đại học",
    title: ``,
  },
  {
    image: "/5.png",
    desc: "Người đã tốt nghiệp cao đẳng, trung cấp muốn học thêm bằng đại học",
    title: ``,
  },
];

export const Register = () => {
  return (
    <Box py={{ base: "16", lg: "20" }}>
      <Container maxW="1728px">
        <Heading
          fontSize={{ base: "25px", md: "32px", lg: "32px" }}
          textTransform={"uppercase"}
          color={"#B1040E"}
        >
          Ai có thể đăng ký xét tuyển Hệ từ xa PTIT ngay lúc này?
        </Heading>
        <Divider
          borderBottomWidth={"3px"}
          borderBlockEndColor={"orange"}
          w={"200px"}
          padding={{ lg: "15px", base: "6px" }}
        />
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5} py={5}>
          {Reg.map((Reg, index) => (
            <CardReg
              key={index}
              desc={Reg.desc}
              title={Reg.title}
              image={`${Reg.image}`}
            />
          ))}
          <Box>
            <FormMain />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
