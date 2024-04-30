import React from "react";
import "./ServicesPage.css";

/* Componet */
import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Accordion from "./Accordion";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const Services = () => {
  return (
    <div>
      <HeaderPage />

      <main className="service-page">
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
              <i className="fas fa-chart-line"></i>
              <h3>
                <FormattedMessage id="marketing" />
              </h3>
              <p>
                <FormattedMessage id="marketing-info" />
              </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="500">
              <i className="fas fa-wrench"></i>
              <h3>
                <FormattedMessage id="maintenance" />
              </h3>
              <p>
                <FormattedMessage id="maintenance-info" />
              </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="600">
              <i className="fas fa-search"></i>
              <h3>
                <FormattedMessage id="seo" />
              </h3>
              <p>
                <FormattedMessage id="seo-info" />
              </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="700">
              <i className="fas fa-tachometer-alt"></i>
              <h3>
                <FormattedMessage id="optimization" />
              </h3>
              <p>
                <FormattedMessage id="optimization-info" />
              </p>
            </div>
          </div>
        </section>

        <section className="preguntas">
          <h2 className="heading">
            <FormattedMessage id="services-questions" />
          </h2>
          <div className="accordion-container">
            <Accordion
              title={<FormattedMessage id="services-questions-1" />}
              content={<FormattedMessage id="services-questions-p1" />}
              dataAos="fade-right"
              dataAosDelay="300"
            />

            <Accordion
              title={<FormattedMessage id="services-questions-2" />}
              content={<FormattedMessage id="services-questions-p2" />}
              dataAos="fade-left"
              dataAosDelay="300"
            />

            <Accordion
              title={<FormattedMessage id="services-questions-3" />}
              content={<FormattedMessage id="services-questions-p3" />}
              dataAos="fade-right"
              dataAosDelay="300"
            />

            <Accordion
              title={<FormattedMessage id="services-questions-4" />}
              content={<FormattedMessage id="services-questions-p4" />}
              dataAos="fade-left"
              dataAosDelay="300"
            />
          </div>
        </section>
      </main>

      <ScrollToTop />

      <Footer />
    </div>
  );
};
export default Services;
