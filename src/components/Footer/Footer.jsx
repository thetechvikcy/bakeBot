import React from "react";
import { Container } from "./styles";
import reactIcon from "../../assets/react-icon.svg";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";

export default function Footer() {
  return (
    <Container>
      <div className="logo-content">
        <span className="logo-name">BakeBot </span>
      </div>

      <div className="footer-text">
        <p>
          Made with <img src={reactIcon} alt="React" /> using React.js
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/your-profile/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/your-github/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://wa.me/yourwhatsapplink"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="WhatsApp" />
        </a>
      </div>
    </Container>
  );
}
