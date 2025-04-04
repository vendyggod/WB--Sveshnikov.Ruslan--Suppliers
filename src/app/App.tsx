import { FC } from "react";
import { AppRoutes } from "./AppRoutes";
import { queryClient } from "./";
import { QueryClientProvider } from "@tanstack/react-query";
import { MainProvider } from "./providers/mainProvider.tsx";
import { GlobalReset } from "./styles";
import { ThemeProvider } from "styled-components";
import { themeDark } from "./styles/themeDark.ts";

export const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={themeDark}>
        <GlobalReset />
        <MainProvider>
          <AppRoutes />
        </MainProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
