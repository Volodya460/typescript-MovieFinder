import styled from "styled-components";

export const ContainerLayout = styled.div`
  width: 100%;

  border-bottom: 1px solid grey;
`;

export const Header = styled.header`
  display: flex;

  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  a {
    font-size: 24px;
  }
`;
