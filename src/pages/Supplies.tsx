import { FC } from "react";
import { PageHeader, Heading } from "../shared/ui";
import { SuppliesTable } from "../widgets";
import { ActionBar } from "../widgets/ActionBar/ui/ActionBar.tsx";

export const Supplies: FC = () => {
  return (
    <>
      <PageHeader>
        <Heading as="h1">Поставки</Heading>
        <ActionBar />
      </PageHeader>
      <SuppliesTable />
    </>
  );
};
