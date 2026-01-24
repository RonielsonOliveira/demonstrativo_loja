import styled, { createGlobalStyle } from "styled-components";
import { primaryColor, primaryDarkColor, textcolor } from "../config/colors";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
  *{
    outline: none;
  }
  html, body, #root {
    margin: 0;
  }
  body {   
    font-family: sans-serif;
    background: ${primaryDarkColor};
    color: black;  
  }
  #root {
    min-height: 100vh; 
     background-color:black;
  }
  main {
    flex: 1;    
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  button {
    cursor: pointer;
    background: ${primaryColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
    transition: all 300ms;
  }
  button:hover{
    filter: brightness(75%);
  }
  a {
    text-decoration: none;
    color: ${primaryColor};
  }
  ul {
    list-style: none;
  }

  .Toastify__toast--success {
    background: ${primaryColor};
    color: #fff;
    @media (max-width: 768px){
      width: 95%;
  }
    @media (max-width: 480px) {
        width: 95%;
        margin-bottom: 15px;
  }
  }
  .Toastify__toast--error {
    background: ${textcolor};
    color: ${primaryColor};
    @media (max-width: 768px){
      margin-top: 5px;
      width: 85%;
  }
    @media (max-width: 480px) {
      margin: 0 auto;
      width: 85%;
        margin-bottom: 15px;
  }
  }
`;
export const Container = styled.section`
  background-color: ${primaryColor};
  width: 80%;
  text-align: center;
  padding: 30px;
  margin: 10px auto;
  box-shadow: 0 0 10px rgba(44, 20, 20, 0.1);
  border-radius: 15px;

  @media (max-width: 768px) {
    .slick-slide {
      height: auto !important;
    }

    .slick-track {
      display: flex !important;
    }
    .slick-slide > div {
      margin: 0 auto;
      width: 100%;
    }
    max-width: 500px;
    width: 100%;
    padding: 10px;
    a {
      font-size: 15px;
    }
    img {
      width: 100%;
    }
  }
  @media (max-width: 480px) {
    .slick-slide {
      height: auto !important;
    }
    .slick-track {
      display: flex !important;
    }
    .slick-slide > div {
      margin: 0 auto;
      width: 100%;
    }
    width: 100%;
    padding: 5px;
    a {
      font-size: 15px;
    }
    img {
      width: 100%;
    }
  }
`;
