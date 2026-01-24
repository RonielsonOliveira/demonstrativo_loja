import React from "react";
import Main from "./components/Main";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Routes from './routes/index'
import Header from "./components/Header";
import GlobalStyles from "./styles/GlobalStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";
export default function App(){
  return (
  <BrowserRouter>
  <Header/>
  <Routes/>
  
  <GlobalStyles/>
          <ToastContainer autoClose={3000} className="toast-container" />

  </BrowserRouter>);
}
