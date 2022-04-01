import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/header";
import MainBody from "./components/mainBody/mainBody";
import AppStyled from "./App.styled";
import IntroductionStyled from "./components/mainBody/sections/introduction/introduction.styled";
import MainContent from "./components/mainContent/mainContent";
import Footer from "./components/footer/footer";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Title from "./components/title/title";
import ContactForm from "./components/contactForm/contactForm";

function App() {
  return (
    <div className="App">
        <div className="main">
            <div className="center">
                <Header/>
                <BrowserRouter>
                    <Routes>
                        <Route path={"/"} element={<MainContent/>}/>
                        <Route path={"/contact"} element={<ContactForm/>}/>
                    </Routes>
                </BrowserRouter>
                <Footer/>
            </div>
        </div>
    </div>
  );
}

export default App;
