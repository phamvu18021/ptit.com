"use client";
import { MotionTop} from "@/components/MotionTop";

import {
  AspectRatio,
  Box,
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import { FcBookmark } from "react-icons/fc";
export const Introduce = () => {
  return (
  
      <Box py={{ base: "16", lg:"20"}} >
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          maxW={"1728px"}
          margin={"0 auto"}
        >
          <MotionTop>
          <Stack bg="White" height="full" padding={"24px"}>
            <Heading
              fontSize={{ base: "22px", md: "md", lg: "23px" }}
              pb={{ lg: "5px" }}
            >
              Giới thiệu về
            </Heading>
            <Heading fontSize={{ base: "25px", md: "25px", lg: "32px" }} color={"#B1040E"}  >
              HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG
            </Heading>
            <Divider
              borderBottomWidth={"3px"}
              borderBlockEndColor={"orange"}
              w={"200px"}
              p={{ base: "6px", lg: "15px" }}
            />
            <List
              spacing={30}
              pt={{ lg: "15px", base: "15px" }}
              fontSize={{ base: "18px", lg: "21px", md: "md" }}
            >
              <ListItem mt={{ lg: "19px" }}>
                <ListIcon as={FcBookmark} />
                Học viện Công nghệ Bưu chính Viễn thông là đơn vị sự nghiệp trực
                thuộc Bộ thông tin và truyền thông. Với 2 cơ sở đào tạo tại Hà
                Nội, TP. Hồ Chí Minh và 03 Viện nghiên cứu trong lĩnh vực ICT
              </ListItem>
              <ListItem>
                <ListIcon as={FcBookmark} />
                Học viên tốt nghiệp sẽ nhận bằng cử nhân/bằng kỹ sư do Học
                viện Công nghệ Bưu chính Viễn thông cấp, có giá trị trên cả nước.
                Với bằng cấp này, Học viên có thể học tiếp lên Thạc sĩ, Tiến
                sĩ... và đủ điều kiện dự thi vào công chức theo đúng quy định của
                Nhà nước.
              </ListItem>
            </List>
          </Stack>
          </MotionTop>
            <AspectRatio h={{ base: "300px", lg: "500px" }} ratio={1} >
              <iframe src="https://www.youtube.com/embed/IFRjie2XVzE?si=zc9YvKNFQW71Evyy" />
            </AspectRatio>
        </SimpleGrid>
        
      </Box>
  );
};
