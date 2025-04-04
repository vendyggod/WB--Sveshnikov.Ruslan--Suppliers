import { FC } from "react";
import { NavList, StyledNav, StyledNavLink } from "./Navigation.styles.tsx";

export const Navigation: FC = () => {
  return (
    <StyledNav>
      <NavList>
        <StyledNavLink to="supplies" $active={true}>
          Поставки
        </StyledNavLink>
        <StyledNavLink to="products">Товары</StyledNavLink>
        <StyledNavLink to="prices">Цены и скидки</StyledNavLink>
        <StyledNavLink to="analytics">Аналитика</StyledNavLink>
        <StyledNavLink to="promotion">Реклама</StyledNavLink>
      </NavList>
    </StyledNav>
  );
};
