import styled from "styled-components";

export const SliderContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 30px;
  margin-top: 10px;
  width: 80%;
  height: 600px;
  position: relative;
  .slick-prev,
  .slick-next {
    width: 30px;
    height: 30px;

    border-radius: 50%;
    z-index: 10;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* cor e tamanho da seta */
  .slick-prev::before,
  .slick-next::before {
    font-size: 22px;
    color: #ffffff;
    opacity: 1;
  }

  /* posicionamento lateral */
  .slick-prev {
    left: -53px;
  }

  .slick-next {
    right: -53px;
  }
  @media (max-width: 768px) {
    width: 80%;
    margin-left: 5px;

    .slick-prev,
    .slick-next {
      display: none !important;
    }
    .slick-slide {
      width: 100% !important;
    }

    .slick-track {
      display: flex;
    }
  }
  @media (max-width: 768px) {
    .slick-list {
      overflow: visible;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  margin-left: 5%;
  cursor: pointer;
  transition: transform 0.3s;
  @media (max-width: 768px) {
    .slick-list {
      overflow: hidden;
    }
  }

  &:hover {
    transform: scale(1.05);
    border-radius: 15px;
  }
`;
export const Modal = styled.div`
  display: ${({ show }) => (show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
`;
export const ImageWrapper = styled.div`
  width: 100%;
  height: 420px;
  border-radius: 15px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 320px;
    margin: 0 auto;
    overflow: hidden;
  }
`;

export const ModalImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
`;
export const Caption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 15px;
  width: 100%;
  padding: 14px 18px;

  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: 0.95rem;

  backdrop-filter: blur(4px);
  z-index: 10;
`;
