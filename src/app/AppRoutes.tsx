import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { AppLayout } from "../shared/ui";
import { Supplies, PageNotFound } from "../pages";
import { FC } from "react";

export const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="supplies" />} />
          <Route path="supplies" element={<Supplies />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
