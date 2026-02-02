import styled from "styled-components";
import * as colors from "../../config/colors";

export const Title = styled.h1`
  margin: 20px auto;
  color: ${colors.textcolor};
  text-align: center;
  font-size: 28px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 64px;
  width: 100%;
  max-width: 1200px;
  margin: 32px auto;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 40px;
  }
`;

export const Contatos = styled.div`
  width: 100%;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 14px;
  justify-items: center;
`;
export const ContatoCard = styled.div`
  background-color: beige;
  display: grid;
  justify-items: center;
  padding: 16px;
`;
