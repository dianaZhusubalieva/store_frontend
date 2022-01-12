import React from "react";
import AboutUs from "../components/MainPage/Hero/AboutUs";
import Hero from "../components/MainPage/Hero/Hero";
import Product from "../components/MainPage/Hero/Product";
import Navbar from "../components/Navbar/Navbar";
const MainPage = () => {
  return (
    <body data-spy="scroll" data-target="#navbarNav" data-offset="50">
      <Navbar />
      <Hero />
      <AboutUs />
      <Product />
    </body>
  );
};

export default MainPage;
