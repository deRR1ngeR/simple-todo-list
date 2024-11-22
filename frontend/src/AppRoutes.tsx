import { Route, Routes } from "react-router-dom";
import { URLS } from "./constants/URLS";
import { TodoPage } from "@pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={URLS.main} element={<TodoPage />} />
    </Routes>
  );
};
