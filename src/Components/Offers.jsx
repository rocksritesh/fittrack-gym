import React from "react";

const Offer = () => {
  return (
    <section className="offer-section">
      <div className="offer-container">
        <h2>Special Gym Membership Offer!</h2>
        <p>
          Get in shape and stay healthy with our exclusive membership plans:
        </p>

        <div className="offer-cards">
          <div className="offer-card">
            <h3>Basic Plan</h3>
            <p>$19.99 / month</p>
            <ul>
              <li>Access to all gym equipment</li>
              <li>1 personal training session per month</li>
              <li>Free WiFi</li>
            </ul>
            <button className="offer-btn">Join Now</button>
          </div>
          <div className="offer-card">
            <h3>Pro Plan</h3>
            <p>$29.99 / month</p>
            <ul>
              <li>All Basic Plan benefits</li>
              <li>Unlimited group classes</li>
              <li>3 personal training sessions per month</li>
            </ul>
            <button className="offer-btn">Join Now</button>
          </div>
          <div className="offer-card">
            <h3>Ultimate Plan</h3>
            <p>$49.99 / month</p>
            <ul>
              <li>All Pro Plan benefits</li>
              <li>Unlimited personal training sessions</li>
              <li>Free nutrition consultation</li>
            </ul>
            <button className="offer-btn">Join Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
