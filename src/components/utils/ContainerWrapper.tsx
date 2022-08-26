import { Container, ContainerProps } from "@chakra-ui/react";
import React from "react";
type ContainerWrapperProps = {
  size: "sm" | "md";
};
const ContainerWrapper = ({
  children,
  size,
  ...props
}: React.PropsWithChildren<ContainerWrapperProps> & ContainerProps) => {
  return size === "sm" ? (
    <Container maxW={"400px"} {...props}></Container>
  ) : (
    <Container maxW={"900px"} {...props}>
      {children}
    </Container>
  );
};

export default ContainerWrapper;
