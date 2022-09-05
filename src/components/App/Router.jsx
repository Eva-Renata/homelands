import { Route, Routes } from "react-router-dom";
import { Forside } from "../Pages/Forside/Forside";
import { Boliger } from "../Pages/Boliger/Boliger";
import { Login } from "../Pages/Login/Login";

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Forside />}></Route>
      <Route path="/boliger" element={<Boliger />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};
