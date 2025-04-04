import { useInfiniteQuery } from "@tanstack/react-query";
import { getSupplies } from "../../../shared/api/api.ts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTotal } from "../../../entities/filter/filterSlice.ts";

export const useSupplies = (limit: number = 10) => {
  const dispatch = useDispatch();

  const { data, fetchNextPage, ...rest } = useInfiniteQuery({
    queryKey: ["supplies", limit], // Добавляем limit в ключ запроса
    queryFn: ({ pageParam = 1 }) => getSupplies(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return nextPage <= lastPage.pages ? nextPage : undefined;
    },
  });

  useEffect(() => {
    if (data?.pages[0]?.total) {
      dispatch(setTotal(data.pages[0].total));
    }
  }, [data, dispatch]);

  const supplies = data?.pages.flatMap((page) => page.data) || [];

  return {
    supplies,
    totalItems: data?.pages[0]?.total || 0,
    totalPages: data?.pages[0]?.pages || 0,
    fetchNextPage,
    ...rest,
  };
};
