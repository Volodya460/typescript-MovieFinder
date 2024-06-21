import { FC, ReactNode } from "react";
import { StyledContainer } from "./Container.styled";
interface ContainerProps {
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
