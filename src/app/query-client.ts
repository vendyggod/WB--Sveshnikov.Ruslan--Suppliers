import { DefaultOptions, QueryClient } from "@tanstack/react-query";

const defaultOptions: DefaultOptions = {
  queries: {
    staleTime: 0,
  },
};

export const queryClient: QueryClient = new QueryClient({
  defaultOptions,
});
