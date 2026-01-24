import React from "react";
import { Container } from "../../styles/GlobalStyles.js";
import {
  GridBlock,
  Content,
  Title,
  Button,
  Grid,
  Info,
  GridContent,
  SliderBlock,
} from "./styled.js";

import { Link } from "react-router-dom";
import pinturaLogo from "../../Img/pintura.png";
import reformaLogo from "../../Img/reforma.png";
import marcenariaLogo from "../../Img/marcenaria.png";
import ImageSlider from "../../components/Slider/index.js";
import instagramLogo from "../../Img/instagram.png";
import whatsapplogo from "../../Img/whatsapp.png";
import Mock from "../../pages/Home/homeMock.json";
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
      <GridContent>
        <Content>{Mock.descricao}</Content>
        <GridBlock>
          <Grid>
            <figure>
              <img src={pinturaLogo} alt="" />
              <figcaption>Pintura</figcaption>
            </figure>
            <figure>
              <img src={marcenariaLogo} alt="" />
              <figcaption>Marcenaria</figcaption>
            </figure>
            <figure>
              <img src={reformaLogo} alt="" />
              <figcaption>Reformas em geral</figcaption>
            </figure>
          </Grid>
          <Link to="/orcamento">
            <Button>Faca seu orcamento</Button>
          </Link>
        </GridBlock>
      </GridContent>
      <SliderBlock>
        <ImageSlider images={imagens} />
      </SliderBlock>
      <Title>Contato</Title>
      <Info>
        <Grid>
          <figure>
            <Link to="https://www.instagram.com/belasartes.construcoes/">
              <img src={instagramLogo} alt="" />
            </Link>
            <figcaption>Instagram</figcaption>
          </figure>
          <figure>
            <Link to={url}>
              <img src={whatsapplogo} alt="" />
            </Link>
            <figcaption>WhatsApp</figcaption>
          </figure>
        </Grid>
      </Info>
    </Container>
  );
}
