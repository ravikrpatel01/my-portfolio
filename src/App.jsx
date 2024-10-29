import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";


const App = () => {
  return (
    <>
      <Navbar />
      <Banner/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;
