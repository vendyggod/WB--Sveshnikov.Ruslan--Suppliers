import { FC } from "react";
import { StyledSidebar } from "./Sidebar.styles.tsx";
import { Logo } from "../";

export const Sidebar: FC = () => {
  return (
    <StyledSidebar>
      <Logo />
    </StyledSidebar>
  );
};
