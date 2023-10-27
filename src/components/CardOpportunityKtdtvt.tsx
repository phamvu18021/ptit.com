import Image from 'next/image';
import {
  Box,
  ListItem,
  OrderedList,
  SimpleGrid,
  Stack,
  Heading
} from "@chakra-ui/react";

export const CardOpportunityKtdtvt = () => {
  const jobOpportunities = [
    "Kỹ sư Thiết kế tối ưu mạng, quản lý mạng, vận hành hệ thống mạng viễn thông phức tạp.",
    "Kỹ sư Thiết kế và viết phần mềm cho máy tính, thiết kế và viết phần mềm cho cho các thiết bị thông minh",
    "Kỹ sư thiết kế vi mạch kiếm thử vi mạch, kỹ sư làm việc trong lĩnh vực bán dẫn cũng như các công nghệ vật liệu điện tử tiên tiến khác",
    "Kỹ sư thiết kế, chế tạo, vận hành thiết bị ý tế, hệ thống, thông tin ý thế , hệ thống điện tử hàng không, vũ trụ, hệ thống đa phương tiện.",
    "Chuyên viên thiết kế quy hoachjmnagj và tối ưu mạng",
  ];
  return (
    <Box py={{ base: "10", lg: "16" }} id="sectionVieclam" margin={"0 auto"}>
      <Box
        bgRepeat={"no-repeat"}
        bgSize="cover"
        w={"100%"}
        position="relative"
        maxW={"1728px"}
        margin={"0 auto"}
      >
        <Image
          priority
          alt=""
          src={"/bgPtit.png"}
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            zIndex: "-1",
          }}
        />
        <SimpleGrid
          columns={{ base: 1, md: 1, lg: 2 }}
          maxW={"1728px"}
          margin={"0 auto"}
          py={10}
        >
          <Stack height="full" padding={"24px"} pl={{ lg: "247px", md: "auto", base: "auto" }}>
            <Heading fontWeight={"bold"} color={"white"} fontStyle={"italic"} fontSize={{ base: "25px" }}>
              KỸ THUẬT ĐIỆN TỬ VIỄN THÔNG
            </Heading>
            <OrderedList color={"White"}>
              {jobOpportunities.map((opportunity, index) => (
                <ListItem key={index}>{opportunity}</ListItem>
              ))}
            </OrderedList>
          </Stack>
          <Box w={"350px"} h={"362px"} margin={"0 auto"} mr={{ lg: "439px" }}>
            <Image
              priority
              src="/program.jpg"
              alt='ptit'
              width={500}
              height={200}
              style={{ height: "auto", width: "100%", objectFit: 'cover', borderRadius: "20px" }}
            />
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};
