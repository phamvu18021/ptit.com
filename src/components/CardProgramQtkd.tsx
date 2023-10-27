'use client'
import { Box, Button, Card, CardBody, CardFooter, Divider, Heading, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import { useModal } from './ModalContext';

export const CardProgramQtkd = () => {
    const { isOpen, onOpen, onClose } = useModal();
    return (
        <Box id='sectionHoc' py={{ base: "10" }}>
            <Box maxW={"1728px"} margin={"0 auto"} >
                <Card
                    display="flex"
                    flex={{ base: 1, md: 1, lg: 2 }}
                    flexDirection={{ base: 'column', md: 'row' }}
                    flexWrap="wrap"
                    margin={"0 auto"}
                >
                    <Box w={"350px"} h={"362px"} margin={"0 auto"} mt={{ lg: "99px" }} ml={{ lg: "246px" }} m={{ md: "24px", base: "12px" }}>
                        <Image

                            src="/qtkdd.png"
                            alt='ptit'
                            width={350}
                            height={362}
                            style={{ height: "auto", width: "100%", objectFit: 'cover' }}
                            priority
                        />
                    </Box>
                    <VStack
                        flex={{ base: 1, md: 1, lg: 2 }}
                        padding={{ base: "16px", md: "24px", lg: "99px 99px 99px 155px" }}
                        alignItems={{ base: 'center', md: 'flex-start' }}
                    >
                        <CardBody>
                            <Heading
                                fontSize={{ base: "25px", md: "32px", lg: "32px" }}
                                textTransform={"uppercase"}
                                color={"#B1040E"}
                                ml={{ base: "0", md: "0", lg: "74px" }}
                            >
                                KHUNG CHƯƠNG TRÌNH ĐÀO TẠO
                            </Heading>
                            <Divider
                                borderBottomWidth={"3px"}
                                borderBlockEndColor={"orange"}
                                w={"200px"}
                                padding={{ lg: "15px", base: "6px" }}
                                marginLeft={{ lg: "184px", base: "" }}
                            />
                            <Heading color={"#1E2456"} fontWeight={"bold"} fontSize={{ base: "18px", md: "18px", lg: "24px" }} pt={{ lg: "60px", base: "15px" }}>
                                Kiến thức giáo dục đại cương: Tổng 47 tín
                            </Heading>
                            <UnorderedList textAlign={"left"} spacing={4}>
                                <ListItem>Phần bắt buộc</ListItem>
                                <ListItem>Phần tự chọn</ListItem>
                            </UnorderedList>
                            <UnorderedList textAlign={"left"} >
                            </UnorderedList>
                            <Heading color={"#1E2456"} fontWeight={"bold"} fontSize={{ base: "18px", md: "18px", lg: "24px" }} py={3}>
                                Kiến thức chuyên ngành
                            </Heading>
                            <UnorderedList textAlign={"left"} spacing={4}>
                                <ListItem>Kiến thức cơ sở của khối ngành và ngành: 58 tín chỉ</ListItem>
                                <ListItem>Kiến thức chuyên ngành: 17 tín chỉ</ListItem>
                                <ListItem>Thực tập tốt nghiệp: 10 tín chỉ</ListItem>

                            </UnorderedList>
                        </CardBody>
                        <CardFooter>
                            <Button
                                w={{ base: "100%", md: "250px" }}
                                h={"50px"}
                                color={"white"}
                                bg={"#1E2456"}
                                _hover={{
                                    bg: "red.500",
                                    color: "white",
                                    boxShadow: "md",
                                }}
                                _active={{
                                    bg: "blue.700",
                                    color: "white",
                                    transform: "scale(0.95)",
                                }}
                                onClick={() => !isOpen && onOpen && onOpen()}
                            >
                                Nhận lộ trình học
                            </Button>
                        </CardFooter>
                    </VStack>
                </Card>
            </Box>
        </Box>
    );
};
