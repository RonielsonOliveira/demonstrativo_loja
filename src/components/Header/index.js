import { Nav } from "./styled";
import { Link } from "react-router-dom";
import logo from "../../Img/logo.png";

export default function Header() {
  return (
    <Nav>
      <span>Belas Artes Construcoes</span>
      <Link to="/" className="Link">
        <img src={logo} alt="Belas Artes Construcoes"></img>
      </Link>
    </Nav>
  );
}
