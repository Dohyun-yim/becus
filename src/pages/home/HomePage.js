import React from "react";
import Navigation from "./Navigation";
import Masthead from "./Masthead";
import About from "./About";
import Services from "./Services";
import CallToAction from "./CallToAction";
import Contact from "./Contact";
import Footer from "./Footer";
import "./styles.css";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Masthead />
      <About />
      <Services />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
