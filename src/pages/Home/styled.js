import styled from "styled-components";
import * as colors from "../../config/colors";

export const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  margin: 16px auto;
  width: 100%;
  max-width: 900px;
  font-family: sans-serif;
  font-weight: bold;
  color: ${colors.textcolor};

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const GridContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;
  width: 100%;
  max-width: 1200px;
  margin: 32px auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Content = styled.div`
  flex: 1;
  max-width: 520px;
  font-size: 18px;
  line-height: 1.7;
  color: #fff;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const GridBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;
  max-width: 420px;

  figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  img {
    width: 120px;
    transition: 0.3s ease;
  }

  figcaption {
    margin-top: 8px;
    font-size: 16px;
    color: #fff;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const Button = styled.button`
  position: relative;
  margin-top: 24px;
  padding: 14px 32px;

  background: linear-gradient(
    135deg,
    ${colors.textcolor},
    ${colors.textcolor}cc
  );

  color: ${colors.primaryColor};
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.5px;

  border: 2px solid ${colors.textcolor};
  border-radius: 12px;

  cursor: pointer;
  outline: none;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  /* brilho base */
  box-shadow:
    0 0 14px ${colors.textcolor}55,
    inset 0 1px 0 rgba(255, 255, 255, 0.25);

  transition:
    transform 0.25s ease,
    filter 0.25s ease;

  /* reflexo */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(
      120deg,
      transparent 25%,
      rgba(255, 255, 255, 0.45),
      transparent 70%
    );
    opacity: 0.5;
    pointer-events: none;
    transition: opacity 0.25s ease;
  }

  &:hover {
    /* ✨ MAIS BRILHO */
    filter: brightness(1.1) saturate(1.05);
    transform: translateY(-2px) scale(1.04);

    &::before {
      opacity: 0.85;
    }
  }

  &:active {
    transform: scale(0.97);
    filter: brightness(1.05);
  }

  &:focus-visible {
    outline: 3px solid ${colors.textcolor};
    outline-offset: 3px;
  }

  @media (max-width: 768px) {
    width: 80%;
    font-size: 18px;
    padding: 12px 24px;
  }
`;

export const SliderBlock = styled.div`
  margin: 48px auto;
  width: 100%;
  max-width: 1200px;
`;

export const Info = styled.div`
  margin: 40px auto;
`;

export const ContactGrid = styled.div`
  display: flex;
  gap: 48px;
  justify-content: center;

  figure {
    text-align: center;
  }
  figcaption {
    margin-top: 8px;
    font-size: 16px;
    color: #fff;
  }

  img {
    width: 120px;
    transition: 0.3s ease;
  }

  img:hover {
    transform: scale(1.1);
  }
`;
