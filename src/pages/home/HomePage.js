import React from "react";
import Navigation from "./Navigation";
import Masthead from "./Masthead";
import Services from "./Services";
import Footer from "./Footer";
import "./styles.css";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Masthead />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
