import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Treatments from "../components/Treatments";
import CTAs from "../components/CTAs";
import Services from "../components/Services";
import Covenants from "../components/Covenants";
import TipsSection from "../components/TipsSection";
import Testimonials from "../components/Testimonials";
import FindUsSection from "../components/FindUsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <CTAs />
      <AboutUs />
      <Treatments />
      <Services />
      <Covenants />
      <TipsSection />
      <Testimonials />
      <FindUsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default HomePage;
