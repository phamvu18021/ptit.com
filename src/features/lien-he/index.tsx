import { FormMain } from "@/components/FormContact";
import {
  Box,
  Circle,
  Container,
  GridItem,
  HStack,
  Heading,
  Icon,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { MdMap, MdOutlineMailOutline, MdPhone } from "react-icons/md";

export const Lienhe = () => {
  return (
    <>
      <Box bg="radial-gradient(circle, rgba(5,70,89,1) 2%, rgba(98,212,245,1) 100%, rgba(252,89,52,1) 100%)">
        <Container maxW={"6xl"} py="62px">
          <Heading
            as="h2"
            textAlign={"center"}
            size={"lg"}
            pb="16px"
            color={"white"}
          >
            Liên hệ
          </Heading>
        </Container>
      </Box>
      <Box
        bg={"linear-gradient(180deg, rgba(255, 255, 255, 1), #D6F5FE 100%)"}
        color={"blue.800"}
      >
        <Container maxW={"6xl"} py="60px">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={"16px"}>
            <GridItem border={"1px solid"} borderColor={"gray.400"} p={"16px"}>
              <Heading
                as={"h2"}
                size={{ base: "md", lg: "lg" }}
                textAlign={"center"}
                pb={"16px"}
              >
                Thông tin
              </Heading>
              <VStack align={"start"} fontWeight={500} spacing={"16px"}>
                <HStack>
                  <VStack align={"start"}>
                    <HStack>
                      <Circle p={"8px"} bg={"blue.500"}>
                        <Icon as={MdMap} color={"white"} />
                      </Circle>
                      <Text>Văn phòng tuyển sinh:</Text>
                    </HStack>
                    <UnorderedList>
                      <ListItem ml={"38px"}>
                        Hà Nội: Số 116 Trần Vĩ, Phường Mai Dịch, Quận Cầu Giấy,
                        Thành Phố Hà Nội
                      </ListItem>
                      <ListItem ml={"38px"}>
                        Hồ Chí Minh: Số 91 Ký Con, phường Nguyễn Thái Bình, Quận
                        1, TP Hồ Chí Minh
                      </ListItem>
                    </UnorderedList>
                  </VStack>
                </HStack>
                <HStack>
                  <Circle p={"8px"} bg={"blue.500"}>
                    <Icon as={MdOutlineMailOutline} color={"white"} />
                  </Circle>
                  <Link href={"mailto:daihoctructuyen@tnu.edu.vn"}>
                    Email: daihoctructuyen@tnu.edu.vn
                  </Link>
                </HStack>
                <HStack>
                  <Circle p={"8px"} bg={"blue.500"}>
                    <Icon as={MdPhone} color={"white"} />
                  </Circle>
                  <Link href={"tel:0914709118"}>Hotline: 0914709118</Link>
                </HStack>
              </VStack>
            </GridItem>
            <GridItem border={"1px solid"} borderColor={"gray.400"} p={"16px"}>
              <FormMain title="Vui lòng điền thông tin" />
            </GridItem>
            <GridItem colSpan={{ base: 1, md: 2 }}></GridItem>
          </SimpleGrid>
        </Container>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.7609480745314!2d105.77113527669943!3d21.04224898731216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454c918a64e17%3A0x6a26c7ecd7ef4df2!2zMTE2IFAuIFRy4bqnbiBW4bu5LCBNYWkgROG7i2NoLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1695417775713!5m2!1sen!2s"
          width="100%"
          height="500"
          style={{ border: "none" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </>
  );
};
