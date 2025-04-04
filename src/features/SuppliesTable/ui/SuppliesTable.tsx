import { FC, useEffect } from "react";
import {
  StatusLabel,
  StyledCell,
  StyledSuppliesTable,
  StyledTableHeader,
  SuppliesItem,
  SuppliesTableHeader,
  Warehouse,
  WarehouseAddress,
  WarehouseTitle,
} from "./SuppliesTable.styles.tsx";
import { useSupplies } from "../model/useSupplies.ts";
import { ButtonSupplyActions } from "./ButtonSupplyActions.tsx";

export const SuppliesTable: FC = () => {
  const {
    supplies,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useSupplies();

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100;

      if (scrolledToBottom && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) return <h3>Загружаем список поставок...</h3>;
  if (error) return <h3>Ошибка: {error.message}</h3>;

  return (
    <StyledSuppliesTable>
      <SuppliesTableHeader>
        <tr>
          <StyledTableHeader>Номер</StyledTableHeader>
          <StyledTableHeader>Дата поставки</StyledTableHeader>
          <StyledTableHeader>Город</StyledTableHeader>
          <StyledTableHeader>Количество</StyledTableHeader>
          <StyledTableHeader>Тип поставки</StyledTableHeader>
          <StyledTableHeader>Склад</StyledTableHeader>
          <StyledTableHeader>Статус</StyledTableHeader>
        </tr>
      </SuppliesTableHeader>
      {isLoading && <h3>Загружаем список поставок...</h3>}
      {error && (
        <h3>Произошла непредвиденная ошибка. Попробуйте обновить страницу.</h3>
      )}
      <tbody>
        {supplies?.map((supply) => {
          const { id, date, city, quantity, type, warehouse, address, status } =
            supply;

          return (
            <SuppliesItem key={id}>
              <StyledCell style={{ width: "10rem" }}>{id}</StyledCell>
              <StyledCell>{date}</StyledCell>
              <StyledCell>{city}</StyledCell>
              <StyledCell>{quantity} шт.</StyledCell>
              <StyledCell>{type}</StyledCell>
              <Warehouse>
                <WarehouseTitle>{warehouse}</WarehouseTitle>
                <WarehouseAddress>{address}</WarehouseAddress>
              </Warehouse>
              <StyledCell>
                <StatusLabel type={status}>{status}</StatusLabel>
              </StyledCell>
              <StyledCell style={{ paddingRight: "0", maxWidth: "7rem" }}>
                <ButtonSupplyActions supply={supply} />
              </StyledCell>
            </SuppliesItem>
          );
        })}
      </tbody>
    </StyledSuppliesTable>
  );
};
