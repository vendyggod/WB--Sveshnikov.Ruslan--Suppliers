import styled from "styled-components";
import { NavLink } from "react-router";

export const StyledNav = styled.nav`
  width: max-content;
  margin-bottom: 2.4rem;
  padding: 0.2rem;
  background-color: ${({ theme }) => theme.colors.greySecondary};
  border-radius: var(--border-radius-sm);
`;

export const NavList = styled.ul`
  display: flex;
  gap: 0.2rem;
`;

export const StyledNavLink = styled(NavLink)<{ $active?: boolean }>`
  padding: 0.8rem;
  font-size: 1.6rem;
  border-radius: var(--border-radius-sm);

  &.active:link,
  &.active:visited {
    background-color: #fff;
    color: ${({ theme }) => theme.colors.greyPrimary};
  }
`;
