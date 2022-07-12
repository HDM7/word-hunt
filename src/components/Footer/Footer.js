import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
        Made by{" "}
          Harshdeep Maurya
      </span>
      <div className="iconContainer">
      <a href="mailto:hdm1342007@gmail.com" target="__blank">
          <i className="fas fa-envelope fa-2x"></i>
        </a>
        <a href="https://github.com/HDM7" target="__blank">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/harshdeep-maurya/" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
