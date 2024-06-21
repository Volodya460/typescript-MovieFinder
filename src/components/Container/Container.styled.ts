import styled from "styled-components";

export const StyledContainer = styled.div`
  margin: auto;
  padding: 0 20px 0 20px;

  @media screen and (min-width: 375px) {
    max-width: 335px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 1024px;
    padding: 0 24px 0 24px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1280px;
    padding: 0 15px 0 15px;
  }
`;
