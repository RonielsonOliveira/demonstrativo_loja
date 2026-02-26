import styled from "styled-components";

export const NavFooter = styled.footer`
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;

  background: rgba(0, 0, 0, 0.6); /* translúcido */
  backdrop-filter: blur(6px); /* efeito vidro (opcional) */

  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 15px;

  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
