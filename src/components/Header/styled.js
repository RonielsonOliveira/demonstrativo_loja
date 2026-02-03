import styled from "styled-components";
import * as colors from "../../config/colors";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.45); /* translúcido */
  backdrop-filter: blur(10px);
  height: 110px; /* menor */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

  span {
    color: ${colors.textcolor};
    font-weight: 700;
    font-size: 38px;
    text-decoration: none;
  }

  img {
    width: 140px;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 12px 0;
    flex-direction: column;
    gap: 10px;

    span {
      font-size: 0;
    }

    img {
      width: 120px;
    }
  }

  @media (max-width: 480px) {
    img {
      width: 100px;
    }
  }
`;
