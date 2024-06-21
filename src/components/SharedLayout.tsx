import { NavLink, Outlet } from "react-router-dom";

import { ContainerLayout, Header, Nav } from "./SharedLayout.styled";
import { Container } from "./Container/Container";
function SharedLayout() {
  return (
    <>
      <ContainerLayout>
        {" "}
        <Container>
          <Header>
            <Nav>
              <NavLink to="/">Home</NavLink>
              <a href="./">
                <h1>World of Movie</h1>
              </a>
              <NavLink to="/movies">Movies</NavLink>
            </Nav>
          </Header>
        </Container>
      </ContainerLayout>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default SharedLayout;
