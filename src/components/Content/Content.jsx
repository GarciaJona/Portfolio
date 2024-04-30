import React from "react";
import "./Content.css";

import { Link } from "react-scroll";

import { FormattedMessage } from "react-intl";

const Content = () => (
  <div className="contenido">
    <div class="area">
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <section className="inicio" id="inicio">
      <div className="titulo">
        <p data-aos="fade-up" data-aos-delay="600">
          <FormattedMessage id="greeting" />
        </p>
        <h1 data-aos="fade-up" data-aos-delay="800">
          <FormattedMessage id="name" />
        </h1>
        <p data-aos="fade-up" data-aos-delay="1000">
          <FormattedMessage id="rol" />
        </p>

        <div className="redes-sociales">
          <a
            href="https://www.linkedin.com/in/jonathan-alexis-garcia//"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/GarciaJona/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1400"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5491151190625"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1800"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
        <div className="wrapper">
          <a
            className="button"
            href="https://www.linkedin.com/in/jonathan-alexis-garcia//"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            <div className="icon">
              <i className="fab fa-linkedin"></i>
            </div>
            <span>Linkedin</span>
          </a>
          <a
            className="button"
            href="https://github.com/GarciaJona/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1400"
          >
            <div className="icon">
              <i className="fab fa-github"></i>
            </div>
            <span>Github</span>
          </a>
          <a
            className="button"
            href="https://api.whatsapp.com/send?phone=5491151190625"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1800"
          >
            <div className="icon">
              <i className="fab fa-whatsapp"></i>
            </div>
            <span>Whatsapp</span>
          </a>
        </div>

        <Link to="sobre-mi" href="#sobre-mi">
          <div className="scroll-down"></div>
        </Link>
      </div>
    </section>
  </div>
);

export default Content;
