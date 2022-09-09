import { Route, Routes } from "react-router-dom";
import { Forside } from "../Pages/Forside/Forside";
import { BoligerTS } from "../Pages/Boliger til salg/BoligerTS";
import { Login } from "../Pages/Login/Login";
import { NotFound } from "../Pages/NotFound/NotFound";
import { BoligerTSDetails } from "../Pages/Boliger til salg/BoligerTSDetails";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Forside />}></Route>
        <Route path=":bolig_id" element={<BoligerTSDetails />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
      <Route path="/boliger">
        <Route index element={<BoligerTS />}></Route>
        <Route path=":bolig_id" element={<BoligerTSDetails />}></Route>
      </Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};
