import React, { useState } from "react";
import "./ProjectPage.css";

/* Modal */
import Modal from "./Modal";

/* React router */
import { NavLink } from "react-router-dom";

/* Componet */
import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";

import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

/* Img */
const proyectsImgApp = require.context("../../img", true);

function ProjectApp() {
  const [estadoModal1, cambiarEstadoModal1] = useState(false);
  const [estadoModal2, cambiarEstadoModal2] = useState(false);
  const [estadoModal3, cambiarEstadoModal3] = useState(false);

  return (
    <div>
      <HeaderPage />

      <main>
        <section className="proyectos mas-proyect" id="proyectos">
          <h1 className="heading">
            <FormattedMessage id="projects" />
          </h1>
          <nav className="navbar nav-proj">
            <NavLink to="/project/" offset={-150} duration={500}>
              <FormattedMessage id="site-web" />
            </NavLink>
            <NavLink to="/project/app" offset={-150} duration={500}>
              Apps
            </NavLink>
          </nav>
        </section>
        <section className="projects__grid apps">
          {/* Guijama */}
          <div className="projects__item">
            <a href onClick={() => cambiarEstadoModal1(!estadoModal1)}>
              <img
                src={proyectsImgApp(`./proyecto-app-1.png`)}
                alt=""
                className="projects__img"
              />
            </a>
          </div>
          {/* Moon Ideas */}
          <div className="projects__item">
            <a href onClick={() => cambiarEstadoModal2(!estadoModal2)}>
              <img
                src={proyectsImgApp(`./proyecto-app-2.png`)}
                alt=""
                className="projects__img"
              />
            </a>
          </div>
          {/* Api Dogs */}
          <div className="projects__item">
            <a href onClick={() => cambiarEstadoModal3(!estadoModal3)}>
              <img
                src={proyectsImgApp(`./proyecto-app-3.png`)}
                alt=""
                className="projects__img"
              />
            </a>
          </div>
        </section>
      </main>

      {/* Guijama */}
      <Modal estado={estadoModal1} cambiarEstado={cambiarEstadoModal1}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview">
              <img src={proyectsImgApp(`./proyecto-app-1-com.png`)} alt="" />
            </div>
            <div className="eins-modal-text">
              <p>Guijama</p>
              <p>
                <FormattedMessage id="projectsApp-info-1-p1" />
              </p>
              <p>
                <FormattedMessage id="projectsApp-info-1-p2" />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://distribuidora-guijama.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://distribuidora-guijama.vercel.app/
                </a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage id="projects-tec" />
                </span>
                <div className="eins-modal-tec">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
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

      {/* Moon Ideas */}
      <Modal estado={estadoModal2} cambiarEstado={cambiarEstadoModal2}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview">
              <img src={proyectsImgApp(`./proyecto-app-2-com.png`)} alt="" />
            </div>
            <div className="eins-modal-text">
              <p>Moon ideas</p>
              <p>
                <FormattedMessage id="projectsApp-info-2-p1" />
              </p>
              <p>
                <FormattedMessage id="projectsApp-info-2-p2" />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://moon-ideas.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://moon-ideas.vercel.app/
                </a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage id="projects-tec" />
                </span>
                <div className="eins-modal-tec-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt=""
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <ScrollToTop />

      {/* Api dogs */}
      <Modal estado={estadoModal3} cambiarEstado={cambiarEstadoModal3}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview">
              <img src={proyectsImgApp(`./proyecto-app-3-com.png`)} alt="" />
            </div>
            <div className="eins-modal-text">
              <p>Api Dogs</p>
              <p>
                <FormattedMessage id="projectsApp-info-3-p1" />
              </p>
              <p>
                <FormattedMessage id="projectsApp-info-3-p2" />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span>{" "}
                <a
                  href="https://github.com/GarciaJona/Pi-Dogs-Henry"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/GarciaJona/Pi-Dogs-Henry
                </a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage id="projects-tec" />
                </span>
                <div className="eins-modal-tec-2">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg"
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
}

export default ProjectApp;
