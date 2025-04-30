import React from "react";
import AboutusDiscription from "./AboutusDiscription";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <title>{title}</title>
          <p>
          <h3>Welcome to SAGS-Care Medical Institute</h3>
          where cutting-edge medicine meets compassionate care. 
          We believe healthcare should be as unique as you are—which is why our team of dedicated specialists combines advanced technology with personalized attention to guide you toward optimal wellness.
          From same-day appointments to seamless digital health records, we’ve reimagined the patient experience to be effortless, transparent, and deeply human.
          Whether you’re managing a chronic condition, seeking preventive care, or needing urgent attention, SAGS-Care is your trusted partner every step of the way. 
          Your health journey starts here—let’s make it extraordinary.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
