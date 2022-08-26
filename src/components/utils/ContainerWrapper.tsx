import { Container } from "@chakra-ui/react";
import React from "react";
type ContainerWrapperProps = {
  size: "sm" | "md";
};
const ContainerWrapper = ({
  children,
  size,
}: React.PropsWithChildren<ContainerWrapperProps>) => {
  return size === "sm" ? (
    <Container maxW={"400px"}></Container>
  ) : (
    <Container maxW={"900px"}>{children}</Container>
  );
};

export default ContainerWrapper;
