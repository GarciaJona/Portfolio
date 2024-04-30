import React from "react";
import "./Footer.css";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const Footer = () => {
  // Fecha
  let fecha = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="site-footer">
        <div className="copyright">
          <p>
            <FormattedMessage id="footer-info" />
          </p>
          <p>&copy; {fecha}. All rights reserved.</p>
        </div>
        <div className="redes-sociales">
          <a
            href="https://www.linkedin.com/in/jonathan-alexis-garcia//"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          <a
            href="mailto:jalexisgarcia.91@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fas fa-envelope"></i>
          </a>

          <a
            href="https://github.com/GarciaJona/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=5491151190625"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
