import {
  Container,
  Divider,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  Box
} from "@chakra-ui/react";
import Image from 'next/image'
import { BsFillMortarboardFill } from "react-icons/bs";
import { MotionRightLeft, } from "@/components/MotionLeft";

export const items = [
  {
    icon: BsFillMortarboardFill,
    text: "Lần đầu tiên tại Việt Nam, chương trình đào tạo từ xa trình độ đại học được phát triển trên nền tảng Đại học số. Chuyển đổi giáo dục đại học từ xa được ứng dụng AI, công nghệ 4.0 và hệ thống E – Learning vào giảng dạy.",
  },
  {
    icon: BsFillMortarboardFill,
    text: "Không cần thi tuyển, chỉ xét tuyển.",
  },
  {
    icon: BsFillMortarboardFill,
    text: "Chương trình đào tạo theo quy chuẩn của Bộ GD&ĐT, mang tính ứng dụng, bám sát thực tế, luôn được cập nhật. Chất lượng đào tạo chú trọng phát triển toàn diện năng lực cho người học.",
  },
  {
    icon: BsFillMortarboardFill,
    text: "Môi trường học tập chủ động, năng động, minh bạch; phương pháp giảng dạy tiên tiến",
  },
  {
    icon: BsFillMortarboardFill,
    text: "100% Đội ngũ giảng viên có chuyên môn cao, giàu kinh nghiệm, tận tâm và nhiệt huyết. Đội ngũ GVCN và quản lý học tập, hỗ trợ kỹ thuật sẵn sàng tư vấn 24/24.",
  },
  {
    icon: BsFillMortarboardFill,
    text: "Thời gian học và phương thức đào tạo linh động, học viên có thể tranh thủ thời gian vừa làm việc vừa học tập.",
  },
];
export const Different = () => {
  return (
    <Box bg={"#f6f6f7"} py={{ base: "16", lg: "20" }}>
      <MotionRightLeft>
        <Container maxW={"1728px"} >
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} >
            <Flex>
              <Image
                src={`/diffrent.jpg`}
                width={2560}
                height={1707 }
                style={{ width: "100%",objectFit:"cover" }}
                alt={"Pitit"} 
                />
                
            </Flex>

            <Stack >
              <Heading
                fontSize={{ base: "25px", md: "32px", lg: "32px" }}
                textTransform={"uppercase"}
                color={"#B1040E"}
              >
                Hệ đào tạo từ xa PTIT có gì khác biệt
              </Heading>
              <Divider
                borderBottomWidth={"3px"}
                borderBlockEndColor={"orange"}
                w={"200px"}
                padding={{ base: "6px" }}
              />
              <Text fontSize={{ lg: "21px", base: "19px" }} color={"blackAlpha.900"} fontWeight={"bold"}>
                Đào tạo từ xa đã xuất hiện từ lâu và trở nên phổ biến ở nhiều trường
                đại học, các trung tâm đào tạo,... Nhưng PTIT vẫn luôn là địa chỉ
                đào tạo uy tín, chất lượng, nhận được sự quan tâm lớn. Đó là bởi:
              </Text>
              <List spacing={3} fontSize={{ base: "18px", lg: "20px" }}>
                {items.map((item, index) => (
                  <ListItem key={index}>
                    <ListIcon as={item.icon} color={"red.500"} />
                    {item.text}
                  </ListItem>
                ))}
              </List>
            </Stack>
          </SimpleGrid>
        </Container>
      </MotionRightLeft>
    </Box>
  );
};
