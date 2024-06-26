import React from "react";
import "../../pages/Service/ServicesPage.css";
import { Link } from "react-router-dom";
import { ButtomGet } from "../ButtomGet/ButtomGet";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const Service = () => (
  <section className="servicios" id="servicios">
    <h2 className="heading">
      <FormattedMessage id="services" />
    </h2>
    <div className="row">
      <div className="columns" data-aos="fade-up" data-aos-delay="200">
        <i className="fas fa-drafting-compass"></i>
        <h3>
          <FormattedMessage id="design" />
        </h3>
        <p>
          <FormattedMessage id="design-info" />
        </p>
      </div>
      <div className="columns" data-aos="fade-up" data-aos-delay="300">
        <i className="fas fa-laptop"></i>
        <h3>
          <FormattedMessage id="development" />
        </h3>
        <p>
          <FormattedMessage id="development-info" />
        </p>
      </div>

      <div className="columns" data-aos="fade-up" data-aos-delay="400">
        <i className="fas fa-wrench"></i>
        <h3>
          <FormattedMessage id="maintenance" />
        </h3>
        <p>
          <FormattedMessage id="maintenance-info" />
        </p>
      </div>
    </div>
    <div className="portafolio-btn">
      <Link to="/service">
        <ButtomGet />
      </Link>
    </div>
  </section>
);

export default React.memo(Service);
