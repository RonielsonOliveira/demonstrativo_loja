import { useState } from "react";
import * as S from "./styles.tsx";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../Img/logo.png";
export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <S.Wrapper>
        <S.MenuGroup>
          <S.NavGroup>
            <S.MenuLink href="/">Inicio</S.MenuLink>
            <S.MenuLink href="/orcamento">Orçamento</S.MenuLink>
            <S.MenuLink href="/servicos">Serviços</S.MenuLink>
            <S.MenuLink href="/contato">Contato</S.MenuLink>
          </S.NavGroup>

          <S.SocialGroup>
            <S.LogoLink to="/" className="Link">
              <img src={logo} alt="Belas Artes Construcoes" />
            </S.LogoLink>
          </S.SocialGroup>
        </S.MenuGroup>
        <S.MobileIcon onClick={() => setIsOpen(true)}>
          <FaBars size={28} />
        </S.MobileIcon>
      </S.Wrapper>

      <S.MenuFull isOpen={isOpen}>
        <S.CloseIcon onClick={() => setIsOpen(false)}>
          <FaTimes size={28} />
        </S.CloseIcon>

        <S.MenuNav>
          <S.NavGroup>
            <S.MenuLink href="/" onClick={() => setIsOpen(false)}>
              Inicio
            </S.MenuLink>
            <S.MenuLink href="/orcamento" onClick={() => setIsOpen(false)}>
              Orçamento
            </S.MenuLink>
            <S.MenuLink href="/servicos" onClick={() => setIsOpen(false)}>
              Serviços
            </S.MenuLink>
            <S.MenuLink href="/contato" onClick={() => setIsOpen(false)}>
              Contato
            </S.MenuLink>
          </S.NavGroup>

          <S.SocialGroup>
            <S.LogoLink to="/" className="Link">
              <img src={logo} alt="Belas Artes Construcoes" />
            </S.LogoLink>
          </S.SocialGroup>
        </S.MenuNav>
      </S.MenuFull>
    </>
  );
}

export default Menu;
