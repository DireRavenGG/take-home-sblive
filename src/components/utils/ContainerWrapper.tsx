import { Container, ContainerProps } from "@chakra-ui/react";
import React from "react";
type ContainerWrapperProps = {
  size: "sm" | "md" | "max";
};
const ContainerWrapper = ({
  children,
  size,
  ...props
}: React.PropsWithChildren<ContainerWrapperProps> & ContainerProps) => {
  return size === "sm" ? (
    <Container maxW={"400px"} {...props}></Container>
  ) : size === "max" ? (
    <Container maxW="100%" {...props}>
      {children}
    </Container>
  ) : (
    <Container maxW={"900px"} {...props}>
      {children}
    </Container>
  );
};

export default ContainerWrapper;
