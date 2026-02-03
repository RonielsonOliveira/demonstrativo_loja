import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Orcamento from "../pages/Orcamento";
import Contato from "../pages/Contato";
import Servicos from "../pages/Servicos";

export default function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/orcamento" element={<Orcamento />} />
      <Route exact path="/contato" element={<Contato />} />
      <Route exact path="/servicos" element={<Servicos />} />
    </Routes>
  );
}
