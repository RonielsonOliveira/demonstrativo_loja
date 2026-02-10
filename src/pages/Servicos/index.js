import React from "react";
import { Container } from "../../styles/GlobalStyles.js";
import { Title, Content, Description, Image } from "./styled.js";
import video from "../../videos/video1.mp4";
import video2 from "../../videos/video2.mp4";
import video3 from "../../videos/video3.mp4";
import slide1 from "../../Img/slide-1.jpeg";
import VideoPlayer from "../../components/VideoPlayer/videoPlayer.tsx";
export default function Servicos() {
  return (
    <Container>
      <Title>Reformas</Title>
      <Content>
        <Description>
          Profissional altamente qualificado, com ampla experiência em pintura
          residencial, marcenaria e reformas completas de caasas, atuando na
          região de Uruburetama, Ceará. Trabalha com dedicação e compromisso em
          cada etapa do serviço, desde o planejamento até a entrega final,
          garantindo resultaos de alta qualidade e satisfaçã
        </Description>
        <Image>
          <VideoPlayer src={video} />
        </Image>
      </Content>
      <Title>Pintura</Title>
      <Content>
        <Description>
          Profissional altamente qualificado, com ampla experiência em pintura
          residencial, marcenaria e reformas completas de casas, atuando na
          região de Uruburetama, Ceará. Trabalha com dedicação e compromisso em
          cada etapa do serviço, desde o planejamento até a entrega final,
          garantindo resultados de alta qualidade e satisfaçã
        </Description>
        <Image>
          <img src={slide1} alt="Pintura" />
        </Image>
      </Content>
      <Title>Iluminação</Title>
      <Content>
        <Description>
          Profissional altamente qualificado, com ampla experiência em pintura
          residencial, marcenaria e reformas completas de casas, atuando na
          região de Uruburetama, Ceará. Trabalha com dedicação e compromisso em
          cada etapa do serviço, desde o planejamento até a entrega final,
          garantindo resultados de alta qualidade e satisfaçã
        </Description>
        <Image>
          <Image>
            <VideoPlayer src={video2} />
          </Image>
        </Image>
      </Content>
      <Title>Cubas Acartonadas</Title>
      <Content>
        <Description>
          Profissional altamente qualificado, com ampla experiência em pintura
          residencial, marcenaria e reformas completas de casas, atuando na
          região de Uruburetama, Ceará. Trabalha com dedicação e compromisso em
          cada etapa do serviço, desde o planejamento até a entrega final,
          garantindo resultados de alta qualidade e satisfaçã
        </Description>
        <Image>
          <img src={slide1} alt="Pintura" />
        </Image>
      </Content>
      <Title>Revestimentos</Title>
      <Content>
        <Description>
          Profissional altamente qualificado, com ampla experiência em pintura
          residencial, marcenaria e reformas completas de casas, atuando na
          região de Uruburetama, Ceará. Trabalha com dedicação e compromisso em
          cada etapa do serviço, desde o planejamento até a entrega final,
          garantindo resultados de alta qualidade e satisfaçã
        </Description>
        <Image>
          <img src={slide1} alt="Pintura" />
        </Image>
      </Content>
      <Title> Gesso Acartonado</Title>
      <Content>
        <Description>
          Profissional altamente qualificado, com ampla experiência em pintura
          residencial, marcenaria e reformas completas de casas, atuando na
          região de Uruburetama, Ceará. Trabalha com dedicação e compromisso em
          cada etapa do serviço, desde o planejamento até a entrega final,
          garantindo resultados de alta qualidade e satisfaçã
        </Description>
        <Image>
          <Image>
            <VideoPlayer src={video3} />
          </Image>
        </Image>
      </Content>
    </Container>
  );
}
