import styled from "styled-components";

export const Title = styled.h1`
  margin: 20px auto;
  color: white;
  text-align: center;
  font-size: 28px;
`;
export const DetalhesContato = styled.h2`
  margin: 20px auto;
  color: white;
  text-align: center;
  font-size: 28px;
`;
export const DetalhesColor = styled.h2`
  color: #f2a900;
  font-size: 38px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  width: 100%;
  max-width: 1200px;
  margin: 32px auto 60px;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 40px;
  }
`;

export const Contatos = styled.div`
  width: 100%;
  padding: 8px; /* menos respiro */

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, max-content));
  gap: 8px; /* cards mais próximos */
  justify-content: center;
`;
export const ContatoCard = styled.div`
  background-color: beige;
  display: grid;
  justify-items: center;
  padding: 16px;
`;
