import React from "react";
import { Container } from "../../styles/GlobalStyles.js";
import { Title, Content, Contatos } from "./styled.js";
import Mock from "../../pages/Contato/orcamentoMock.json";
import Card from "../../components/Card/index.js";
export default function Contato() {
  return (
    <Container>
      <Title>Contato</Title>
      <Title>Telefone: (83) 31312312123</Title>
      <Title>Email: jackson@live.com</Title>
      <Title>Endereços</Title>
      <Content>
        <Contatos>
          {Mock.map((item) => (
            <div>
              <Card cidade={item.Cidade} endereco={item.Endereco} />
            </div>
          ))}
        </Contatos>
      </Content>
    </Container>
  );
}
