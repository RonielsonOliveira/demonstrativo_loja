import styled from "styled-components";
import * as colors from "../../config/colors";

export const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  margin: 16px auto;
  width: 100%;
  max-width: 800px;
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
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const Button = styled.button`
  margin-top: 24px;
  background-color: ${colors.primaryColor};
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  padding: 14px 28px;
  border: 3px solid ${colors.textcolor};
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: ${colors.textcolor};
    color: ${colors.primaryColor};
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 80%;
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
