"use client";

import { Box, Button, HStack, Input } from "@chakra-ui/react";

import { useState } from "react";

import { useRouter } from "next/router";
export const FormInputs = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const router = useRouter();

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedSearchQuery = encodeURI(searchQuery || "");
    router.push(`/search?s=${encodedSearchQuery}`);
  };
  return (
    <Box>
      <form onSubmit={onSearch}>
        <HStack>
          <Input
            value={searchQuery}
            type="Text"
            border={"1px solid #BFBFBF "}
            borderRadius={0}
            px={4}
            placeholder="Tim kiem..."
            onChange={(e) => setSearchQuery(e.target.value)}
          />{" "}
          <Button borderRadius={0} onClick={onSearch}>
            Tim Kiem
          </Button>
        </HStack>
      </form>
    </Box>
  );
};
