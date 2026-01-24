import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Orcamento from "../pages/Orcamento";

export default function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/orcamento" element={<Orcamento />} />
    </Routes>
  );
}
