/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./ProjectPage.css";
import Modal from "./Modal";
import { NavLink } from "react-router-dom";

import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";

import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

import { FormattedMessage } from "react-intl";

const proyectsImg = require.context("../../img", true);

const Project = () => {
  const [estadoModal17, cambiarEstadoModal17] = useState(false);
  const [estadoModal14, cambiarEstadoModal14] = useState(false);
  const [estadoModal15, cambiarEstadoModal15] = useState(false);
  const [estadoModal16, cambiarEstadoModal16] = useState(false);
  const [estadoModal13, cambiarEstadoModal13] = useState(false);
  const [estadoModal12, cambiarEstadoModal12] = useState(false);
  const [estadoModal11, cambiarEstadoModal11] = useState(false);
  const [estadoModal10, cambiarEstadoModal10] = useState(false);

  return (
    <div>
      <HeaderPage />

      <main>
        <section className="proyectos mas-proyect" id="proyectos">
          <h1 className="heading" data-section="Nav" data-value="projects">
            <FormattedMessage id="projects" />
          </h1>
          <nav className="navbar nav-proj">
            <NavLink to="/project" offset={-150} duration={500}>
              <FormattedMessage id="site-web" />
            </NavLink>
            <NavLink to="/project/app" offset={-150} duration={500}>
              Apps
            </NavLink>
          </nav>
        </section>

        <section className="projects__grid paginas-web">
          {/* karku */}
          <div className="projects__item">
            <a href onClick={() => cambiarEstadoModal17(!estadoModal17)}>
              <img
                src={proyectsImg(`./proyecto-17.jpg`)}
                alt=""
                className="projects__img"
              />
            </a>
          </div>
          {/* cognity */}
          <div className="projects__item">
            <a href onClick={() => cambiarEstadoModal14(!estadoModal14)}>
              <img
                src={proyectsImg(`./proyecto-14.png`)}
                alt=""
                className="projects__img"
              />
            </a>
          </div>
          {/* madcx campaing */}
          <div className="projects__item">
            <a href onClick={() => cambiarEstadoModal15(!estadoModal15)}>
              <img
                src={proyectsImg(`./proyecto-15.png`)}
                alt=""
                className="projects__img"
              />
            </a>
          </div>

          {/* Medbot */}
          <div className="projects__item">
            <a href onClick={() => cambiarEstadoModal13(!estadoModal13)}>
              <img
                src={proyectsImg(`./proyecto-13.png`)}
                alt=""
                className="projects__img"
              />
            </a>
          </div>
          {/* Mdcx page */}
          <div className="projects__item">
            <a href onClick={() => cambiarEstadoModal16(!estadoModal16)}>
              <img
                src={proyectsImg(`./proyecto-16.png`)}
                className="projects__img"
              />
            </a>
          </div>

          {/* Trilha */}
          <div className="projects__item">
            <a href onClick={() => cambiarEstadoModal11(!estadoModal11)}>
              <img
                src={proyectsImg(`./proyecto-11.png`)}
                alt=""
                className="projects__img"
              />
            </a>
          </div>
          {/* Nabijash */}
          <div className="projects__item">
            <a href onClick={() => cambiarEstadoModal12(!estadoModal12)}>
              <img
                src={proyectsImg(`./proyecto-12.png`)}
                alt=""
                className="projects__img"
              />
            </a>
          </div>
          {/* il mirtilo */}
          <div className="projects__item">
            <a href onClick={() => cambiarEstadoModal10(!estadoModal10)}>
              <img
                src={proyectsImg(`./proyecto-10.png`)}
                alt=""
                className="projects__img"
              />
            </a>
          </div>
        </section>
      </main>

      {/* Karku */}
      <Modal estado={estadoModal17} cambiarEstado={cambiarEstadoModal17}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview">
              <img src={proyectsImg(`./proyecto-17-com.jpg`)} alt="" />
            </div>
            <div className="eins-modal-text">
              <p>Karku</p>
              <p>
                <FormattedMessage id="projects-info-17-p1" />
              </p>
              <p>
                <FormattedMessage id="projects-info-17-p2" />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span>{" "}
                <a href="https://karku.com.ar" target="_blank" rel="noreferrer">
                  https://karku.com.ar
                </a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage id="projects-tec" />
                </span>
                <div className="eins-modal-tec">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-plain-wordmark.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Cognity */}
      <Modal estado={estadoModal14} cambiarEstado={cambiarEstadoModal14}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview">
              <img src={proyectsImg(`./proyecto-14-com.png`)} alt="" />
            </div>
            <div className="eins-modal-text">
              <p>Cognity</p>
              <p>
                <FormattedMessage id="projects-info-14-p1" />
              </p>
              <p>
                <FormattedMessage id="projects-info-14-p2" />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span>{" "}
                <a href="https://cognity.bio/" target="_blank" rel="noreferrer">
                  https://cognity.bio/
                </a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage id="projects-tec" />
                </span>
                <div className="eins-modal-tec">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-plain-wordmark.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* MDCx campaing */}
      <Modal estado={estadoModal15} cambiarEstado={cambiarEstadoModal15}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview">
              <img src={proyectsImg(`./proyecto-15-com.png`)} alt="" />
            </div>
            <div className="eins-modal-text">
              <p>MDCX Campaing</p>
              <p>
                <FormattedMessage id="projects-info-15-p1" />
              </p>
              <p>
                <FormattedMessage id="projects-info-15-p2" />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://mdcx.finance/campaign-1000x1000/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://mdcx.finance/campaign-1000x1000/
                </a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage id="projects-tec" />
                </span>
                <div className="eins-modal-tec">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-plain-wordmark.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* MDCx page */}
      <Modal estado={estadoModal16} cambiarEstado={cambiarEstadoModal16}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview">
              <img src={proyectsImg(`./proyecto-16-com.png`)} alt="" />
            </div>
            <div className="eins-modal-text">
              <p>MDCx</p>
              <p>
                <FormattedMessage id="projects-info-16-p1" />
              </p>
              <p>
                <FormattedMessage id="projects-info-16-p2" />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://mdcx.finance/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://mdcx.finance/
                </a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage id="projects-tec" />
                </span>
                <div className="eins-modal-tec">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-plain-wordmark.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Medbot */}
      <Modal estado={estadoModal13} cambiarEstado={cambiarEstadoModal13}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview">
              <img src={proyectsImg(`./proyecto-13-com.png`)} alt="" />
            </div>
            <div className="eins-modal-text">
              <p>MedBot Clinic</p>
              <p>
                <FormattedMessage id="projects-info-13-p1" />
              </p>
              <p>
                <FormattedMessage id="projects-info-13-p2" />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://medbot.clinic/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://medbot.clinic/
                </a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage id="projects-tec" />
                </span>
                <div className="eins-modal-tec">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-plain-wordmark.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Nabijash */}
      <Modal estado={estadoModal12} cambiarEstado={cambiarEstadoModal12}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview">
              <img src={proyectsImg(`./proyecto-12-com.png`)} alt="" />
            </div>
            <div className="eins-modal-text">
              <p>Nabijash</p>
              <p>
                <FormattedMessage id="projects-info-12-p1" />
              </p>
              <p>
                <FormattedMessage id="projects-info-12-p2" />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://nabijash.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://nabijash.vercel.app/
                </a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage id="projects-tec" />
                </span>
                <div className="eins-modal-tec">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-plain-wordmark.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Trilha */}
      <Modal estado={estadoModal11} cambiarEstado={cambiarEstadoModal11}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview">
              <img src={proyectsImg(`./proyecto-11-com.png`)} alt="" />
            </div>
            <div className="eins-modal-text">
              <p>Trilha</p>
              <p>
                <FormattedMessage id="projects-info-11-p1" />
              </p>
              <p>
                <FormattedMessage id="projects-info-11-p2" />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://www.trilhalele.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.trilhalele.com/
                </a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage id="projects-tec" />
                </span>
                <div className="eins-modal-tec">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Il Mirtilo */}
      <Modal estado={estadoModal10} cambiarEstado={cambiarEstadoModal10}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview">
              <img src={proyectsImg(`./proyecto-10-com.png`)} alt="" />
            </div>
            <div className="eins-modal-text">
              <p>Il Mirtilo</p>
              <p>
                <FormattedMessage id="projects-info-10-p1" />
              </p>
              <p>
                <FormattedMessage id="projects-info-10-p2" />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://www.ilmirtilotienda.com.ar/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.ilmirtilotienda.com.ar/
                </a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage id="projects-tec" />
                </span>
                <div className="eins-modal-tec">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <ScrollToTop />

      <Footer />
    </div>
  );
};
export default Project;
