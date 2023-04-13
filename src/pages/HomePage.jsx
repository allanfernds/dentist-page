import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import CTAs from "../components/CTAs";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <CTAs />
      <AboutUs />
      <Services />
    </>
  );
}

export default HomePage;
