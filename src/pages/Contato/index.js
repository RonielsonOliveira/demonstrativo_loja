import React from "react";
import { Container } from "../../styles/GlobalStyles.js";
import { Title, Content, Contatos } from "./styled.js";
import Mock from "../../pages/Contato/orcamentoMock.json";
import Card from "../../components/Card/index.js";

export default function Contato() {
  return (
    <Container>
      <Title>Contato</Title>
      <Content>
        <Contatos>
          {Mock.map((item) => (
            <Card telefone={item.Telefone} endereco={item.Endereco} />
          ))}
        </Contatos>
      </Content>
    </Container>
  );
}
