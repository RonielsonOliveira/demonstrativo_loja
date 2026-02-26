import styled, { createGlobalStyle } from "styled-components";
import { primaryColor, primaryDarkColor, textcolor } from "../config/colors";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
  *{
    outline: none;
      margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
  html, body, #root {
  margin: 0;
  width: 100%;
  font-family: sans-serif;
  background: #030517;
  line-height: 1.5;
  overflow-x: hidden;
  }
  html {
  scroll-behavior: smooth;
}
  body {   
    font-family: sans-serif;
    background: ${primaryDarkColor};
    color: black;  
  }

    grid: {
      container: '130rem';
      gutter: '3.2rem';
    };
    border: {
      radius: '0.4rem';
    };
    font: {
      family: "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
      light: 300;
      normal: 400;
      bold: 600;
      sizes: {
        xsmall: '1.2rem';
        small: '1.4rem';
        medium: '1.6rem';
        large: '1.8rem';
        xlarge: '2.0rem';
        xxlarge: '2.8rem';
        huge: '5.2rem';
      };
    };
    colors: {
      primary: '#F231A5';
      secondary: '#3CD3C1';
      mainBg: '#06092B';
      lightBg: '#F2F2F2';
      white: '#FAFAFA';
      black: '#030517';
      lightGray: '#EAEAEA';
      gray: '#8F8F8F';
      darkGray: '#2E2F42';
      red: '#FF6347';
      blue: '#279de2';
    };
    spacings: {
      xxsmall: '0.8rem';
      xsmall: '1.6rem';
      small: '2.4rem';
      medium: '3.2rem';
      large: '4.0rem';
      xlarge: '4.8rem';
      xxlarge: '5.6rem';
    };
    layers: {
      base: 10;
      menu: 20;
      overlay: 30;
      modal: 40;
      alwaysOnTop: 50;
    };
    transition: {
      default: '0.3s ease-in-out';
      fast: '0.1s ease-in-out';
    };


  #root {
    min-height: 100vh; 
     background-color:black;
  }
  main {
    flex: 1;    
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow-x: hidden;
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
  background-color: #3a3f45;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 50px;
  margin-top: 120px;
  box-shadow: 0 0 10px rgba(44, 20, 20, 0.1);

  @media (max-width: 768px) {
    margin-top: 80px;
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
