"use client";

import { Sidebar } from "@/layouts/components/Sidebar";
import { Container, GridItem, SimpleGrid } from "@chakra-ui/react";
import { ReactNode } from "react";

export const LayoutPost = ({ children }: { children: ReactNode }) => {
  return (
    <Container maxW={"8xl"} py={8}>
      <SimpleGrid columns={{ base: 1, lg: 4 }} spacing={"8"}>
        <GridItem colSpan={{ base: 1, lg: 3 }}>{children}</GridItem>
        <GridItem colSpan={{ base: 1, g: 1 }}>
          <Sidebar typez={"post"} sticky="125px" />
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};
