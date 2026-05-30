import React from "react";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Certifications from "../components/Certifications";
import Industries from "../components/Industries";
import Technology from "../components/Technology";
import Contact from '../components/Contact'
export default function HomeScreen() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Projects />
      <Industries />
      <Technology />
      <Testimonials />
      <Certifications />
      <Contact />
    </>
  );
}
