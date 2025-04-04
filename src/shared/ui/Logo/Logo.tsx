import { FC } from "react";
import { Link } from "react-router";
import { StyledLogo } from "./Logo.styles.tsx";

export const Logo: FC = () => {
  return (
    <Link to="/">
      <StyledLogo src="/images/wb.svg" alt="Wildberries Logo" />
    </Link>
  );
};
