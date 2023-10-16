// "use client";

// import { Container, GridItem, SimpleGrid } from "@chakra-ui/react";
// import { ReactNode } from "react";
// import { Sidebar } from "../components/Sidebar";

// export const LayoutBottom = ({
//   children,
//   sticky,
// }: {
//   children: ReactNode;
//   sticky?: string;
// }) => {
//   return (
//     <Container maxW={"10xl"}>
//       <SimpleGrid
//         px={{ base: 0, lg: 16, md: 4 }}
//         spacing={12}
//         columns={{ base: 1, lg: 3 }}
//         // gap={"24px"}
//       >
//         <GridItem colSpan={{ base: 1, md: 2, lg: 2 }}>{children}</GridItem>
//         <GridItem
//           pr={24}
//           className="sidebar-posts"
//           colSpan={{ base: 1, lg: 1 }}
//           alignContent={"center"}
//         >
//           <Sidebar
//           sticky={sticky} />
//         </GridItem>
//       </SimpleGrid>
//     </Container>
//   );
// };

"use client";

import { Container, GridItem, SimpleGrid } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Sidebar } from "../components/Sidebar";

export const LayoutBottom = ({
  children,
  sticky,
}: {
  children: ReactNode;
  sticky?: string;
}) => {
  return (
    <Container maxW={"8xl"}>
      <SimpleGrid columns={{ base: 1, lg: 4 }} spacing={"8"}>
        <GridItem colSpan={{ base: 1, lg: 3 }}>{children}</GridItem>
        <GridItem className="sidebar-posts" colSpan={{ base: 1, lg: 1 }}>
          <Sidebar sticky={sticky} />
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};
