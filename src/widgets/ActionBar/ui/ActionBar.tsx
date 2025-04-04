import { FC } from "react";
import { AddSupply } from "../../../features";
import { SearchSupply } from "../../../features";
import { Container } from "./ActionBar.styled.tsx";

export const ActionBar: FC = () => {
  return (
    <Container>
      <AddSupply />
      <SearchSupply />
    </Container>
  );
};
