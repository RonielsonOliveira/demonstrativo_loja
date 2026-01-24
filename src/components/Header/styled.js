import styled from "styled-components";
import * as colors from "../../config/colors";

export const Nav = styled.nav`
  background: ${colors.primaryColor};
  height: 160px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px; /* Espaço entre imagem e link */
 
  a {
    color: ${colors.textcolor};
    font-weight: bold;
    font-size: 50px;
    text-decoration: none;
   
  

  }

  img {
    width: 180px;
    border-radius: 10px;
  }
  @media (max-width: 768px){
    height: auto;
    flex-direction: column;
    gap: 15px;

    a {
      font-size: 0px;
    }
    img {
      width: 140px;
    }
  }
    @media (max-width: 480px) {
    a {
      font-size: 0px;
    }

    img {
      width: 120px;
    }
  }
`;
