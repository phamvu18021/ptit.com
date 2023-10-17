import {
  BtnMes,
  BtnPhone,
  BtnZalo,
  BtnEmail,
  BtnMailN,
} from "@/components/BtnCTA";
import { Box, Flex, VStack } from "@chakra-ui/react";
export const CTA = () => {
  return (
    <Box
      pos={"fixed"}
      top={{ lg: "50%", base: "80%" }}
      right={"0"}
      // transform={"translateY(-50%)"}
      className="CTA"
      zIndex={5}
      // transform={"rotate(90deg)"}
      // translateY={"100%,0"}
      // transformOrigin={"bottom right"}
 
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
        <BtnMailN aria-label="mailto : " />
        <BtnMes aria-label="messenter" />

        <BtnPhone aria-label="phone" />
      </VStack>
    </Box>
  );
};
