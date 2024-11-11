import React from "react";

export default function Contact() {
  return (
    <div id="contact">
      <h1>Contact Us</h1>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <input type="submit" value="Send Message" />
      </form>
    </div>
  );
}
