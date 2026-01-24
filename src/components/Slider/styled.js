import styled from 'styled-components';
import * as colors from '../../config/colors';

export const SliderContainer= styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 30px;
  margin-top: 10px;
`;

export const Image = styled.img`
  width: 98% !important;
  height: 300px;
  object-fit: cover;
  border-radius: 15px;
  
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
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


export const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
  
`;
