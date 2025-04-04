import { FC } from "react";
import { Outlet } from "react-router";
import { Container, Main, StyledAppLayout } from "./AppLayout.styles";
import { Sidebar } from "../";
import { Navigation } from "../";

export const AppLayout: FC = () => {
  return (
    <StyledAppLayout>
      <Sidebar />
      <Container>
        <Navigation />
        <Main>
          <Outlet />
        </Main>
      </Container>
    </StyledAppLayout>
  );
};
