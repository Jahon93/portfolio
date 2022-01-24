import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Works from "./components/works/Works";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

export default function App(){
  return (
    <div className="app">
        <Navbar/>
        <Home />
        <Works />
        <Skills />
        <Contact />
        <Footer />
    </div>
  );
}
        
