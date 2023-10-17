import { Button, ButtonProps } from "@chakra-ui/react";

export const BtnTheme = (props: ButtonProps) => {
  const { children, ...args } = props;
  return (
    <Button
      color={"black"}
      size={"md"}
      rounded={"sm"}
      {...args}
      border={"2px solid black"}
      // bg={"linear-gradient(70deg, #f68920 0%, #fc5934 100%)"}
      transition={"all ease .4s"}
      _hover={{
        // background:
        //   "linear-gradient(70deg, rgba(252, 89, 52, 1),#054659 100%);",
        // transform: "translateY(-4px)"
        textDecoration: "underline",
      }}
    >
      {children}
    </Button>
  );
};
