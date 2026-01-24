import { Nav } from "./styled";
import { Link } from "react-router-dom";
import logo from '../../Img/logo.png'


export default function Header(){
    return(
        <Nav>
          <a>Belas Artes Construcoes</a>
          <Link to="/" className="Link">
          <img src={logo}></img>
          </Link>
        </Nav>
    )
}