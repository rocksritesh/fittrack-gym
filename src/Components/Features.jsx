import React from "react";
import Myimages from "../images/1.svg";
import Myimages1 from "../images/2.svg";
import Myimages2 from "../images/3.svg";
import Myimages3 from "../images/4.svg";

export default function Features() {
  return (
    <div id="features">
      <h1>Our Features</h1>
      <div className="a-container">
        <div className="a-box">
          <div className="a-b-img">
            <img src={Myimages1} alt="Feature 1" />
          </div>
          <div className="a-b-text">
            <h2>SPECIFIC MUSCLE</h2>
            <p>Brief description of the feature.</p>
          </div>
        </div>
        <div className="a-box">
          <div className="a-b-img">
            <img src={Myimages} alt="Feature 1" />
          </div>
          <div className="a-b-text">
            <h2>WEIGHTLIFTING</h2>
            <p>Brief description of the feature.</p>
          </div>
        </div>
        <div className="a-box">
          <div className="a-b-img">
            <img src={Myimages2} alt="Feature 1" />
          </div>
          <div className="a-b-text">
            <h2>FLEX YOUR MUSCLES</h2>
            <p>Brief description of the feature.</p>
          </div>
        </div>
        <div className="a-box">
          <div className="a-b-img">
            <img src={Myimages3} alt="Feature 2" />
          </div>
          <div className="a-b-text">
            <h2>CARDIO EXCERSISE</h2>
            <p>Brief description of the feature.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
