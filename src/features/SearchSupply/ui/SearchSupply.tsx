import { ChangeEvent, FC } from "react";
import {
  FilterSelect,
  IconSearch,
  SearchContainer,
  SearchInput,
} from "./SearchSupply.styles.tsx";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store.ts";
import {
  setFilter,
  setSearchQuery,
} from "../../../entities/filter/filterSlice.ts";

const filters = [
  { value: "number", label: "По номеру" },
  { value: "city", label: "По городу" },
  { value: "type", label: "По типу поставки" },
  { value: "status", label: "По статусу" },
];

export const SearchSupply: FC = () => {
  const filteredBy = useSelector(
    (state: RootState) => state.ui.filters.filteredBy,
  );
  const searchQuery = useSelector(
    (state: RootState) => state.ui.filters.searchQuery,
  );
  const dispatch = useDispatch();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <SearchContainer>
      <FilterSelect
        value={filteredBy}
        onChange={(e) => {
          dispatch(setFilter(e.target.value));
        }}
      >
        {filters.map((filter) => (
          <option key={filter.value} value={filter.value}>
            {filter.label}
          </option>
        ))}
      </FilterSelect>

      <SearchInput
        type="text"
        maxLength={24}
        placeholder="Поиск..."
        value={searchQuery}
        onChange={(e) => handleSearch(e)}
      />
      <IconSearch />
    </SearchContainer>
  );
};
