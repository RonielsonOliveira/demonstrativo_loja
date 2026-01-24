import styled from "styled-components";
import * as colors from "../../config/colors";
export const NavFooter = styled.footer`
  background: ${colors.primaryColor};
  color: #fff;
  padding: 15px;
  width: 100%;
  height: 150px;
  text-align: center;

  a {
    color: #fff;
    margin: 0 10px 0 0;
    font-weight: bold;
  }
  div {
    justify-content: space-between;
  }
`;
export const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  margin: 10px auto 5px auto; //topo/ esquerda/ bottom / direita
  width: 60%;
  font-family: sans-serif;
  font-weight: bold;
  color: ${colors.textcolor};

  @media (max-width: 768px) {
    font-size: 20px;
    width: 80%;
    height: 20%;
    margin-top: 2px;
    margin-bottom: 5px;
  }

  @media (max-width: 480px) {
    margin-top: 2px;
    margin-bottom: 5px;
  }
`;

export const Content = styled.div`
  font-size: 20px;
  font-family: sans-serif;
  margin-top: 10px;
  margin: 0 auto;
  line-height: 1.7;
  flex: 1;

  min-width: 260px;
  color: #fff;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 2px auto;
    gap: 40px;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
    flex-direction: column;
    img {
      margin-top: 5px;
      width: 40%;
    }
  }
  @media (max-width: 480px) {
    width: 80%;

    img {
      margin-top: 5px;
      width: 50%;
    }
  }
`;
export const GridBlock = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex: 1;
`;

export const SliderBlock = styled.div`
  display: flex;
  margin-top: 10px;
  margin-top: 60px;

  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex: 1;
`;
export const Grid = styled.div`
  display: flex;
  gap: 24px;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  min-width: 200px;

  figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  img {
    width: 100%;
    max-width: 140px;
    height: auto;
  }

  figcaption {
    margin-top: 12px;
    font-size: 18px;
    color: #fff;
    font-weight: 300;
  }

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;
export const GridContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 50px 40px auto;
  gap: 10px;
  justify-content: center;
  width: 100%;
  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 768px) {
    margin-top: 10px;
    flex-direction: column;
    text-align: center;
    img {
      margin-top: 5px;
      width: 70%;
    }
  }
  @media (max-width: 480px) {
    width: 80%;

    img {
      margin-top: 5px;
      width: 70%;
    }
  }
`;

export const Button = styled.button`
  background-color: ${colors.primaryColor};
  color: #fff;
  font-size: 38px;
  font-weight: bold;
  padding: 12px 24px;
  border: 3px solid ${colors.textcolor};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 20px;
  margin: 20px auto;
  display: block;

  &:hover {
    color: ${colors.primaryColor};
    background-color: ${colors.textcolor};
    transform: scale(1.15);
  }
  &:active {
    transform: scale(0.98);
  }
  @media (max-width: 768px) {
    border-radius: 10px;
    width: 80%;
    padding: 10px;
  }
  @media (max-width: 480px) {
    border-radius: 100px;
    width: 80%;
    padding: 5px;
  }
`;
export const Info = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  img {
    width: 150px;
    border-radius: 12px;
    object-fit: cover;
    transition: all 0.3s ease;
    margin-top: 20px;
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
      cursor: pointer;
    }
  }
`;
