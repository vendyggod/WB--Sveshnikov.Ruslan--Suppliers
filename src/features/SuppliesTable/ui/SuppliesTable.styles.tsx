import styled from "styled-components";
import { TableHeader } from "../../../shared/ui/TableHeader/TableHeader.tsx";

export const StyledSuppliesTable = styled.table`
  width: 100%;
  max-width: 126.5rem;
  table-layout: auto;
  padding-bottom: 2rem;
  border-collapse: separate;
  border-spacing: 0 4px;
`;

export const SuppliesTableHeader = styled(TableHeader)`
  padding: 2.6rem 1.2rem;
  text-align: left;
`;

export const StyledTableHeader = styled.th`
  padding-left: 1.2rem;
  padding-bottom: 1.2rem;
`;

export const SuppliesItem = styled.tr`
  position: relative;
  width: 100%;
  padding: 0.4rem;
  border-radius: 14px;
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.colors.greySecondary};
  text-align: left;

  & th {
    padding: 2.2rem 0.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & td:first-child {
    border-radius: 14px 0 0 14px;
  }

  & td:last-child {
    border-radius: 0 14px 14px 0;
  }
`;

export const StyledCell = styled.td`
  padding: 2.6rem 1.2rem;
`;

export const Warehouse = styled.td`
  display: flex;
  flex-direction: column;
`;

export const WarehouseTitle = styled.span`
  padding: 0.8rem;
`;

export const WarehouseAddress = styled.span`
  text-overflow: ellipsis;
  font-size: 1.3rem;
  padding: 0.6rem;
  color: ${({ theme }) => theme.colors.greyTertiary};
`;

export const StatusLabel = styled.span<{ type: string }>`
  font-size: 1.1rem;
  padding: 4px;
  border-radius: 6px;
  color: ${({ type }) => (type === "В пути" ? "#85EF89" : "#FDB172")};
  background-color: ${({ type }) =>
    type === "В пути" ? "#14532B" : "#7C3D12"};
`;
