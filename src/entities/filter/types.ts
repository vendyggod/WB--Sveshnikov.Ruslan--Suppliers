export type FilterField = string;

export interface FiltersState {
  filteredBy: string;
  searchQuery: string;
}

export interface PaginationState {
  totalItems: number;
  itemsPerScroll: number;
}

export interface UIState {
  filters: FiltersState;
  pagination: PaginationState;
}
