import React from "react";
import Header from "../Header/Header";
import Carosel from "../Carousel/Carosel";
import Welcome from "../Welcome/Welcome";
import AboutUs1 from "../AboutUs1/AboutUs1";
import AboutUs2 from "../AboutUs2/AboutUs2";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Carosel />
      <Welcome />
      <AboutUs1 />
      <AboutUs2 />
      <Footer />
    </>
  );
};

export default Home;
