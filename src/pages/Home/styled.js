import styled from "styled-components";
import * as colors from "../../config/colors";

export const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  margin: 16px auto;
  max-width: 900px;
  font-family: sans-serif;
  font-weight: bold;
  color: ${colors.textcolor};

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const Content = styled.div`
  width: 85%;
  margin: 0 auto;
  font-size: 24px;
  line-height: 1.7;
  color: #fff;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 20px;
  }
`;

export const SliderWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 60px 0;
`;

export const GridTrack = styled.div`
  display: flex;
  width: fit-content;
  animation: scroll 5s linear infinite;
  will-change: auto;

  &:hover {
    animation-play-state: paused;
  }

  @keyframes scroll {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(-25%, 0, 0);
    }
  }
`;

export const GridInner = styled.div`
  display: flex;
  gap: 20px;
`;

export const Figure = styled.figure`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 25px;
  margin: -25px;

  img {
    width: 300px;
    transition: transform 0.3s ease;
    will-change: transform;
  }

  figcaption {
    position: absolute;
    bottom: 15px;

    padding: 10px 16px;
    background: rgba(255, 255, 255, 0.9);
    color: #000;
    font-weight: 700;
    border-radius: 10px;

    opacity: 0;
    transform: translateY(10px);
    transition:
      opacity 0.3s ease,
      transform 0.3s ease;

    pointer-events: none;
  }

  &:hover figcaption {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const FloatingCTA = styled.div`
  position: fixed;

  bottom: 30px;
  right: 30px;
  z-index: 999;

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
`;

export const FloatingCTALeft = styled.div`
  position: fixed;
  bottom: 30px;
  left: 30px;
  z-index: 999;

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
`;

export const Button = styled.button`
  padding: 20px 36px;
  font-size: 1.2rem;
  font-weight: 700;
  min-width: 240px;

  background: linear-gradient(135deg, #ff7a18, #ffb347);
  color: #fff;

  border: none;
  border-radius: 40px;
  cursor: pointer;

  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.07);
    box-shadow: 0 22px 50px rgba(0, 0, 0, 0.45);
  }
`;

export const ContactGrid = styled.div`
  display: flex;
  gap: 48px;
  justify-content: center;
  margin: 40px 0;

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
    transition: transform 0.3s ease;
  }

  img:hover {
    transform: scale(1.1);
  }
`;

export const SliderBlock = styled.div`
  margin: 48px auto;
  width: 100%;
  max-width: 1200px;
`;
export const GridBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Info = styled.div`
  margin: 40px auto;
`;
