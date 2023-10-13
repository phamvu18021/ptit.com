import { BtnMes, BtnPhone, BtnZalo, BtnEmail } from "@/components/BtnCTA";
import { Box, Flex, VStack } from "@chakra-ui/react";
export const CTA = () => {
  return (
    <Box
      pos={"fixed"}
      top={"50%"}
      right={"0"}
      //   transform={"translateY(-50%)"}
      className="CTA"
      zIndex={5}
    >
      <Flex
      key={"e1"}
        height={"160px"}
        width={"200px"}
        alignItems={"center"}
        //   justifyContent={"flex-end"}
        top={"-108%"}
        left={"-105%"}
        position={"absolute"}
      >
        <BtnEmail aria-label="email" />
      </Flex>

      <VStack gap={0} alignItems={"flex-end"}>
        <BtnMes aria-label="messenter" />
        <BtnZalo aria-label="zalo" />
        <BtnPhone aria-label="phone" />
      </VStack>
    </Box>
  );
};
