import React, { useState } from "react";
import Slider from "react-slick";
import {
  Image,
  ImageWrapper,
  Modal,
  ModalImage,
  SliderContainer,
} from "./styled";

export default function ImageSlider({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <ImageWrapper>
              <Image
                src={img}
                alt={`Imagem ${index}`}
                onClick={() => setSelectedImage(img)}
              />
            </ImageWrapper>
          </div>
        ))}
      </Slider>

      <Modal show={selectedImage} onClick={() => setSelectedImage(null)}>
        {selectedImage && (
          <ModalImage src={selectedImage} alt="Imagem ampliada" />
        )}
      </Modal>
    </SliderContainer>
  );
}
