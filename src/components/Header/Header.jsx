import React, { useContext } from "react";
import "./Header.css";
/* ReactScroll */
import { Link } from "react-scroll";

/* DarkMode */
import DarkMode from "../DarkMode/DarkMode";

/* Language */
import { FormattedMessage } from "react-intl";
import { langContext } from "../../context/Context";

const Header = () => {
  // Buttom language
  const idioma = useContext(langContext);
  // Menu desplegable
  const menuDesplegable = () => {
    let navbar = document.querySelector(".navbar");
    navbar.classList.toggle("activar");

    window.onscroll = () => {
      if (window.scrollY > 0) {
        document.querySelector(".site-header").classList.add("activar");
      } else document.querySelector(".site-header").classList.remove("activar");

      navbar.classList.remove("activar");
    };
  };

  return (
    <header className="site-header">
      <div
        id="menu-btn"
        className="fas fa-bars"
        onClick={menuDesplegable}
      ></div>

      <Link className="logo" to="inicio">
        <p>
          (<span>JonaGarcia</span>)
        </p>
      </Link>

      <nav className="navbar">
        <Link to="inicio" spy={true} offset={-150} href="#inicio">
          <FormattedMessage id="home" />
        </Link>
        <Link to="sobre-mi" spy={true} offset={-150} href="#sobre-mi">
          <FormattedMessage id="about" />
        </Link>
        <Link to="servicios" spy={true} offset={-150} href="#servicios">
          <FormattedMessage id="services" />
        </Link>
        <Link to="proyectos" spy={true} offset={-150} href="#proyectos">
          <FormattedMessage id="projects" />
        </Link>
        <Link to="contactos" spy={true} offset={-150} href="#contactos">
          <FormattedMessage id="contact" />
        </Link>
        <div id="buttons">
          <img
            onClick={() => idioma.selectLanguage("en-US")}
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
            alt="EEUU"
          />
          <img
            onClick={() => idioma.selectLanguage("es-ES")}
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg"
            alt="España"
          />
        </div>
      </nav>
      <div className="switch" id="switch">
        <DarkMode />
      </div>
    </header>
  );
};

export default React.memo(Header);
