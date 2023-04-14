import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Treatments from "../components/Treatments";
import CTAs from "../components/CTAs";
import Services from "../components/Services";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <CTAs />
      <AboutUs />
      <Treatments />
      <Services />
    </>
  );
}

export default HomePage;
