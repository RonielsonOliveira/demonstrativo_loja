import { NavFooter } from "./styled";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <NavFooter>
      <Link to="https://meu-portifolio-eight-cyan.vercel.app">
        Site feito por: Francisco Ronielson
      </Link>
    </NavFooter>
  );
}
