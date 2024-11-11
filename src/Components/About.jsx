import React from "react";
import photo from "../images/laslogo.png";

export default function About() {
  return (
    <section id="about">
      <div className="about-text">
        <h1>About Us</h1>
        <p>
          We are dedicated to helping you achieve your fitness goals with expert
          trainers and state-of-the-art equipment.
        </p>
        <button>Learn More</button>
      </div>
      <div className="about-image">
        <img src={photo} alt="About Us" />
      </div>
    </section>
  );
}
