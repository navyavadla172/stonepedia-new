import React from "react";
import footerImage from "../assets/images/footer-background.jpg"; // Replace with your image path

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `url(${footerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "40px 0",
        color: "white",
        textAlign: "center",
      }}
    >
      <p>© 2024 Your Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
