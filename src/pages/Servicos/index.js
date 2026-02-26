import React from "react";
import { Container } from "../../styles/GlobalStyles.js";
import { Title, Content, Description, Image, TextBlock } from "./styled.js";
import video from "../../videos/video1.mp4";
import video2 from "../../videos/video2.mp4";
import video3 from "../../videos/video3.mp4";
import slide1 from "../../Img/slide-1.jpeg";
import VideoPlayer from "../../components/VideoPlayer/videoPlayer.tsx";
export default function Servicos() {
  return (
    <Container>
      <Content>
        <TextBlock>
          <Title>Reformas em Geral</Title>
          <Description>
            Atuamos com reformas completas e parciais, incluindo construção e
            demolição de paredes, adequações de layout, regularização de
            superfícies e execução de acabamentos finos. Trabalhamos com
            planejamento técnico, materiais de qualidade e mão de obra
            especializada, garantindo segurança estrutural, funcionalidade e
            excelente resultado estético em cada etapa da obra.
          </Description>
        </TextBlock>
        <Image>
          <VideoPlayer src={video} />
        </Image>
      </Content>

      <Content>
        <TextBlock>
          <Title>Pintura</Title>
          <Description>
            Executamos serviços de pintura residencial e comercial em áreas
            internas e externas, abrangendo paredes, tetos e fachadas.
            Utilizamos tintas de alto desempenho, com preparo adequado das
            superfícies (lixamento, correção de imperfeições, seladores e
            massas), assegurando maior durabilidade, acabamento uniforme e
            proteção contra intempéries. Trabalhamos com as melhores marcas do
            mercado para entregar um resultado superior aos nossos clientes.
          </Description>
        </TextBlock>
        <Image>
          <img src={slide1} alt="Pintura" />
        </Image>
      </Content>

      <Content>
        <TextBlock>
          <Title>Iluminação</Title>
          <Description>
            Desenvolvemos e executamos projetos de iluminação funcional e
            decorativa, desde o planejamento técnico até a instalação final.
            Atuamos em ambientes internos e externos, priorizando eficiência
            energética, conforto visual e valorização dos espaços. Trabalhamos
            com iluminação direta, indireta, embutida e decorativa, sempre
            respeitando normas técnicas e necessidades específicas de cada
            ambiente.
          </Description>
        </TextBlock>
        <Image>
          <VideoPlayer src={video2} />
        </Image>
      </Content>

      <Content>
        <TextBlock>
          <Title>Cubas Acartonadas</Title>
          <Description>
            Realizamos a construção artesanal de cubas em gesso acartonado,
            totalmente sob medida, adequadas para banheiros, lavabos e ambientes
            personalizados. Cada projeto é desenvolvido com atenção aos
            detalhes, garantindo precisão dimensional, estética refinada e
            perfeita integração com o revestimento, proporcionando exclusividade
            e sofisticação ao espaço.
          </Description>
        </TextBlock>
        <Image>
          <img src={slide1} alt="Pintura" />
        </Image>
      </Content>

      <Content>
        <TextBlock>
          <Title>Revestimentos</Title>
          <Description>
            Executamos serviços completos de instalação de revestimentos em
            paredes e tetos, incluindo cerâmicas, porcelanatos e outros
            materiais decorativos. Trabalhamos com alinhamento preciso,
            nivelamento adequado e juntas bem definidas, assegurando
            durabilidade, resistência e um acabamento de alto padrão.
          </Description>
        </TextBlock>
        <Image>
          <img src={slide1} alt="Pintura" />
        </Image>
      </Content>

      <Content>
        <TextBlock>
          <Title>Gesso Acartonado (Drywall)</Title>
          <Description>
            Especialistas na execução de tetos em gesso acartonado, oferecemos
            soluções totalmente modulares e personalizáveis, com excelente
            acabamento. Trabalhamos com sancas, rebaixos, nichos e integração
            com sistemas de iluminação, proporcionando versatilidade estética,
            rapidez na execução e alto padrão técnico, atendendo tanto projetos
            residenciais quanto comerciais.
          </Description>
        </TextBlock>
        <Image>
          <VideoPlayer src={video3} />
        </Image>
      </Content>
    </Container>
  );
}
