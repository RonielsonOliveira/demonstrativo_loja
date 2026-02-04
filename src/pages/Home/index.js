import React from "react";
import { Container } from "../../styles/GlobalStyles.js";
import {
  Content,
  Title,
  Button,
  Info,
  SliderBlock,
  ContactGrid,
  FloatingCTA,
  Figure,
  GridInner,
} from "./styled.js";

import { Link } from "react-router-dom";
import ImageSlider from "../../components/Slider/index.js";
import Mock from "../../pages/Home/homeMock.json";

import { GiPaintRoller } from "react-icons/gi";
import { MdConstruction } from "react-icons/md";
import { FaLightbulb, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { LuBrickWall } from "react-icons/lu";
import { MdTexture } from "react-icons/md";
import { FaSink } from "react-icons/fa";
import slide1 from "../../Img/slide-1.jpeg";
import slide2 from "../../Img/slide-2.jpeg";
import slide3 from "../../Img/slide-3.jpeg";
import slide4 from "../../Img/slide-4.jpeg";

export default function Contato() {
  const numero = "5585992271722";
  const url = `https://wa.me/${numero}`;
  const imagens = [slide1, slide2, slide3, slide4];

  return (
    <Container>
      <Title>{Mock.Title1}</Title>

      <SliderBlock>
        <ImageSlider images={imagens} />
      </SliderBlock>
      <Content>{Mock.descricao}</Content>
      <FloatingCTA>
        <Link to="/orcamento">
          <Button>Faça seu orçamento</Button>
        </Link>
      </FloatingCTA>
      {/* <FloatingCTALeft>
        <Link to="/contato">
          <Button>Entre em contato</Button>
        </Link>
      </FloatingCTALeft> */}

      <GridInner>
        <Figure>
          <GiPaintRoller size={250} color="white" />

          <figcaption>Pintura</figcaption>
        </Figure>
        <Figure>
          <MdConstruction size={250} color="white" />
          <figcaption>Reformas em geral</figcaption>
        </Figure>
        <Figure>
          <FaLightbulb size={250} color="white" />
          <figcaption>Iluminação</figcaption>
        </Figure>
        <Figure>
          <LuBrickWall size={250} color="white" />
          <figcaption>Revestimentos</figcaption>
        </Figure>
        <Figure>
          <MdTexture size={250} color="white" />
          <figcaption>Gesso Acartonado</figcaption>
        </Figure>
        <Figure>
          <FaSink size={250} color="white" />
          <figcaption>Cubas Acartonadas</figcaption>
        </Figure>
      </GridInner>

      <Title>Contato</Title>

      <Info>
        <ContactGrid>
          <figure>
            <a
              href="https://www.instagram.com/belasartes.construcoes/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={140} color="white" />
            </a>
            <figcaption>Instagram</figcaption>
          </figure>

          <figure>
            <a href={url} target="_blank" rel="noreferrer">
              <FaWhatsapp size={140} color="white" />
            </a>
            <figcaption>WhatsApp</figcaption>
          </figure>
        </ContactGrid>
      </Info>
    </Container>
  );
}
