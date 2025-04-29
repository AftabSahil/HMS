import React from "react";
import Hero from "../Components/Hero";
import Biography from "../Components/Biography";
import AboutusDiscription from "../Components/AboutusDiscription";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | ZeeCare Medical Institute"}
        imageUrl={"/about.png"}
      />
      <AboutusDiscription imageUrl={"/whoweare.png"} />
    </>
  );
};

export default AboutUs;
