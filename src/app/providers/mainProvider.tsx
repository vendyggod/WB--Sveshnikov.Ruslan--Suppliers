import { Provider } from "react-redux";
import { store } from "../store.ts";
import { ReactNode } from "react";

interface MainProviderProps {
  children: ReactNode;
}

export function MainProvider({ children }: MainProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
