import React from "react";
import { Container } from "../../styles/GlobalStyles.js";
import { Content, Contatos, DetalhesContato, DetalhesColor } from "./styled.js";
import Mock from "../../pages/Contato/contatoMock.json";
import Card from "../../components/Card/index.js";
export default function Contato() {
  return (
    <Container>
      <DetalhesContato>
        <DetalhesColor>Telefone</DetalhesColor> (85) 992271722
      </DetalhesContato>
      <DetalhesContato>
        <DetalhesColor>Email</DetalhesColor> jacksonwillianmbraga@gmail.com
      </DetalhesContato>
      <DetalhesColor>Endereços</DetalhesColor>
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
