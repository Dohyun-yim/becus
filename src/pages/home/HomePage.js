import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import Masthead from "./Masthead";
import About from "./About";
import Services from "./Services";
import CallToAction from "./CallToAction";
import Contact from "./Contact";
import Footer from "./Footer";

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
