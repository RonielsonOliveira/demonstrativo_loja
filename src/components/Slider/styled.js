import styled from "styled-components";

export const SliderContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 30px;
  margin-top: 10px;
  width: 80%;
  height: 600px;
  position: relative;
`;

export const Image = styled.img`
  width: 100% !important;
  height: 500px;
  orientation: 16 / 9;
  border-radius: 15px;
  cursor: pointer;
  transition: transform 0.3s;

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
  position: relative;
  width: 99%;
  height: 500px;
  border-radius: 15px;
  overflow: hidden;
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
