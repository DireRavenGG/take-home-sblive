import { Container } from "@chakra-ui/react";
import React from "react";
type ContainerWrapperProps = {
  size: string;
};
const ContainerWrapper = ({
  children,
  size,
}: React.PropsWithChildren<ContainerWrapperProps>) => {
  return <Container maxW={size}>{children}</Container>;
};

export default ContainerWrapper;
