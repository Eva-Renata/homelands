import { Route, Routes } from "react-router-dom";
import { Forside } from "../Pages/Forside/Forside";
import { BoligerTS } from "../Pages/Boliger til salg/BoligerTS";
import { Login } from "../Pages/Login/Login";
import { NotFound } from "../Pages/NotFound/NotFound";

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Forside />}></Route>
      <Route path="*" element={<NotFound />}></Route>
      <Route path="/boliger" element={<BoligerTS />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};
