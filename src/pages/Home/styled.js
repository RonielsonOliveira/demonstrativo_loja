import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  font-size: clamp(20px, 4vw, 32px);
  margin: 16px auto;
  max-width: 900px;
  font-family: sans-serif;
  font-weight: bold;
  color: #f2a900;
  padding: 0 16px;
`;

export const Content = styled.div`
  width: min(85%, 900px);
  margin: 0 auto;
  font-size: clamp(16px, 2.8vw, 24px);
  line-height: 1.7;
  color: #e6e6e6;
  text-align: center;
  padding: 0 16px;
`;

export const SliderWrapper = styled.div`
  width: 100%;
  margin: 48px 0;

  @media (max-width: 768px) {
    margin: 32px 0;
  }
`;

export const GridInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  margin: 80px auto;
`;

export const Figure = styled.figure`
  position: relative;
  text-align: center;
  &:hover {
    transform: scale(1.2);
  }

  img {
    width: clamp(180px, 40vw, 250px);
    max-width: 100%;
    transition: transform 0.3s ease;
  }

  figcaption {
    margin-top: 10px;
    padding: 8px 12px;
    color: #fff;
    font-weight: 700;
    font-size: clamp(14px, 2.5vw, 16px);
  }

  @media (hover: hover) {
    img:hover {
      transform: scale(1.05);
    }
  }
`;

export const FloatingCTA = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;

  z-index: 1100;
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-6px);
    }
    100% {
      transform: translateY(0);
    }
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    right: 12px;
    bottom: 12px;
  }
`;

export const FloatingCTALeft = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;

  animation: float 3s ease-in-out infinite;

  @media (max-width: 768px) {
    left: 12px;
    bottom: 12px;
  }
`;

export const Button = styled.button`
  padding: 16px 28px;
  font-size: clamp(14px, 4vw, 18px);
  font-weight: 700;
  min-width: 200px;

  background: #f2a900;
  color: #fff;
  border: none;
  border-radius: 40px;
  cursor: pointer;

  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.06);
      box-shadow: 0 18px 40px rgba(0, 0, 0, 0.45);
    }
  }
`;

export const ContactGrid = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
  flex-wrap: wrap;
  margin: 32px 0;

  figure {
    text-align: center;
  }

  figcaption {
    margin-top: 8px;
    font-size: 14px;
    color: #fff;
  }

  img {
    width: clamp(80px, 25vw, 120px);
    transition: transform 0.3s ease;
  }

  @media (hover: hover) {
    img:hover {
      transform: scale(1.1);
    }
  }
`;

export const SliderBlock = styled.div`
  margin: 32px auto;
  width: 100%;
  max-width: 1200px;
  max-height: 450px;
  padding: 0 10px;
  @media (max-width: 768px) {
    max-height: 350px;
    left: 12px;
    bottom: 12px;
  }
`;

export const GridBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Info = styled.div`
  margin: 32px auto;
  padding: 0 16px;
  max-width: 900px;
`;
