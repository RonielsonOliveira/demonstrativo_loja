import { NavFooter } from "./styled";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <NavFooter>
      <Link to="/">Home</Link>
      <Link to="/contato">Contato</Link>
    </NavFooter>
  );
}
