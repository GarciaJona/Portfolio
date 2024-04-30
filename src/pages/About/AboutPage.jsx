import React, { useEffect } from "react";
import "./AboutPage.css";
import "./AboutPageCertis.css";

/* Componet */
import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";

import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import cv from "../../cv/cv.pdf";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

/* Img */
import imgabout from "../../img/home2.png";

/* Certificados */
import certi1 from "../../img/certificados/henry- full stack.jpg";
import certi2 from "../../img/certificados/henry- teach assistant.jpg";
import certi3 from "../../img/certificados/udemy - javascript moderno.jpg";
import certi4 from "../../img/certificados/coderhouse- web dev.jpg";
import certi5 from "../../img/certificados/coderhouse- javascript.jpg";
import certi6 from "../../img/certificados/educacionit- intro ux.jpeg";
import certi7 from "../../img/certificados/educacionit- UX accesibilidad.jpeg";
import certi8 from "../../img/certificados/educacionit- presupuestoWeb.jpeg";
import certi9 from "../../img/certificados/educacionit- illustrator.jpeg";
import certi10 from "../../img/certificados/educacionit- photoshop.jpeg";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  function readMore() {
    let btnHide = document.querySelector("#btn-hide");
    let parrafoActive = document.querySelector(".parrafo-active");

    parrafoActive.classList.toggle("show");

    if (parrafoActive.classList.contains("show")) {
      btnHide.innerHTML = "↑";
    } else {
      btnHide.innerHTML = "Read more";
    }
  }

  return (
    <div>
      <HeaderPage />

      <main>
        <section className="sobre-mi-seccion" id="sobre-mi">
          <div className="sobre-mi-container">
            <div className="sobre-mi-img-container">
              <img src={imgabout} alt="" className="sobre-mi-img" />

              <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                download="cv.pdf"
                className="btn-codigo cv buttonDownload"
              >
                <FormattedMessage id="btn-cv" />
              </a>
            </div>
            <div className="sobre-mi-info">
              <p>
                <FormattedMessage id="about-info-1" />
              </p>

              <div className="hide parrafo-active">
                <p>
                  <FormattedMessage id="about-info-2" />
                </p>

                <p>
                  <FormattedMessage id="about-info-3" />
                </p>

                <p>
                  <FormattedMessage id="about-info-4" />
                </p>
              </div>

              <div className="btn-info">
                <div
                  className="custom-btn btn-codigo"
                  id="btn-hide"
                  onClick={readMore}
                >
                  <span>Read more</span>
                  
                </div>
              </div>
            </div>
          </div>

          <div className="skill-seccion">
            <h1 className="heading">
              <FormattedMessage id="about-info-title" />
            </h1>
            <div className="skill-container">
              <div
                className="skill-card"
                data-aos="flip-left"
                data-aos-delay="200"
              >
                <img
                  alt="HTML"
                  className="skills-img icon-li"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                  title="HTML5"
                />
                <h2 className="skill-name">HTML</h2>
                <p className="skill-info">
                  <FormattedMessage id="about-skills-1" />
                </p>
              </div>
              <div
                className="skill-card"
                data-aos="flip-up"
                data-aos-delay="200"
              >
                <img
                  alt="CSS"
                  className="skills-img icon-li"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                  title="CSS3"
                />
                <h2 className="skill-name">CSS</h2>
                <p className="skill-info">
                  <FormattedMessage id="about-skills-2" />
                </p>
              </div>
              <div
                className="skill-card"
                data-aos="flip-right"
                data-aos-delay="200"
              >
                <img
                  alt="Js"
                  className="skills-img icon-li"
                  src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png"
                  title="Java Script"
                />
                <h2 className="skill-name">Javascript</h2>
                <p className="skill-info">
                  <FormattedMessage id="about-skills-3" />
                </p>
              </div>
              <div
                className="skill-card"
                data-aos="flip-down"
                data-aos-delay="200"
              >
                <img
                  alt="react"
                  className="skills-img"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  title="jQuery"
                />
                <h2 className="skill-name">ReactJs</h2>
                <p className="skill-info">
                  <FormattedMessage id="about-skills-7" />
                </p>
              </div>
              <div
                className="skill-card"
                data-aos="flip-right"
                data-aos-delay="200"
              >
                <img
                  alt="react"
                  className="skills-img"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
                  title="jQuery"
                />
                <h2 className="skill-name">Material Ui</h2>
                <p className="skill-info">
                  <FormattedMessage id="about-skills-11" />
                </p>
              </div>

              <div
                className="skill-card"
                data-aos="flip-up"
                data-aos-delay="200"
              >
                <img
                  alt="Typescript"
                  className="skills-img"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  title="Typescript"
                />
                <h2 className="skill-name">Typescript</h2>
                <p className="skill-info">
                  <FormattedMessage id="about-skills-10" />
                </p>
              </div>

              <div
                className="skill-card"
                data-aos="flip-up"
                data-aos-delay="200"
              >
                <img
                  alt="Sass"
                  className="skills-img"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                  title="Sass"
                />
                <h2 className="skill-name">Sass</h2>
                <p className="skill-info">
                  <FormattedMessage id="about-skills-4" />
                </p>
              </div>
              <div
                className="skill-card"
                data-aos="flip-left"
                data-aos-delay="200"
              >
                <img
                  alt="Bootstrap"
                  className="skills-img"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                  title="Bootstrap"
                />
                <h2 className="skill-name">Bootstrap</h2>
                <p className="skill-info">
                  <FormattedMessage id="about-skills-5" />
                </p>
              </div>

              <div
                className="skill-card"
                data-aos="flip-right"
                data-aos-delay="200"
              >
                <img
                  alt="nodejs"
                  className="skills-img"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  title="jQuery"
                />
                <h2 className="skill-name">NodeJs</h2>
                <p className="skill-info">
                  <FormattedMessage id="about-skills-8" />
                </p>
              </div>
            </div>
          </div>

          {/* Certificados */}

          <div className="certis-seccion" id="certificados">
            <h1 className="heading">
              <FormattedMessage id="about-info-Certification" />
            </h1>
            <div className="certis-container">
              <div
                className="certis-card"
                data-aos="flip-left"
                data-aos-delay="200"
              >
                <img
                  alt="HTML"
                  className="certis-img icon-li"
                  src={certi1}
                  title="HTML5"
                />
                <h2 className="certis-name">Henry</h2>
                <p className="certis-info">
                  <FormattedMessage id="about-certis-1" />
                </p>
              </div>
              <div
                className="certis-card"
                data-aos="flip-up"
                data-aos-delay="200"
              >
                <img
                  alt="CSS"
                  className="certis-img icon-li"
                  src={certi2}
                  title="CSS3"
                />
                <h2 className="certis-name">Henry</h2>
                <p className="certis-info">
                  <FormattedMessage id="about-certis-2" />
                </p>
              </div>
              <div
                className="certis-card"
                data-aos="flip-right"
                data-aos-delay="200"
              >
                <img
                  alt="Js"
                  className="certis-img icon-li"
                  src={certi3}
                  title="Java Script"
                />
                <h2 className="certis-name">Udemy</h2>
                <p className="certis-info">
                  <FormattedMessage id="about-certis-3" />
                </p>
              </div>
              <div
                className="certis-card"
                data-aos="flip-down"
                data-aos-delay="200"
              >
                <img
                  alt="react"
                  className="certis-img"
                  src={certi4}
                  title="jQuery"
                />
                <h2 className="certis-name">Coderhouse</h2>
                <p className="certis-info">
                  <FormattedMessage id="about-certis-4" />
                </p>
              </div>
              <div
                className="certis-card"
                data-aos="flip-right"
                data-aos-delay="200"
              >
                <img
                  alt="react"
                  className="certis-img"
                  src={certi5}
                  title="jQuery"
                />
                <h2 className="certis-name">Coderhouse</h2>
                <p className="certis-info">
                  <FormattedMessage id="about-certis-5" />
                </p>
              </div>

              <div
                className="certis-card"
                data-aos="flip-up"
                data-aos-delay="200"
              >
                <img
                  alt="Typescript"
                  className="certis-img"
                  src={certi6}
                  title="Typescript"
                />
                <h2 className="certis-name">EducacionIT</h2>
                <p className="certis-info">
                  <FormattedMessage id="about-certis-6" />
                </p>
              </div>

              <div
                className="certis-card"
                data-aos="flip-up"
                data-aos-delay="200"
              >
                <img
                  alt="Sass"
                  className="certis-img"
                  src={certi7}
                  title="Sass"
                />
                <h2 className="certis-name">EducacionIT</h2>
                <p className="certis-info">
                  <FormattedMessage id="about-certis-7" />
                </p>
              </div>
              <div
                className="certis-card"
                data-aos="flip-left"
                data-aos-delay="200"
              >
                <img
                  alt="Bootstrap"
                  className="certis-img"
                  src={certi8}
                  title="Bootstrap"
                />
                <h2 className="certis-name">EducacionIT</h2>
                <p className="certis-info">
                  <FormattedMessage id="about-certis-8" />
                </p>
              </div>

              <div
                className="certis-card"
                data-aos="flip-right"
                data-aos-delay="200"
              >
                <img
                  alt="nodejs"
                  className="certis-img"
                  src={certi9}
                  title="jQuery"
                />
                <h2 className="certis-name">EducacionIT</h2>
                <p className="certis-info">
                  <FormattedMessage id="about-certis-9" />
                </p>
              </div>
              <div
                className="certis-card"
                data-aos="flip-right"
                data-aos-delay="200"
              >
                <img
                  alt="nodejs"
                  className="certis-img"
                  src={certi10}
                  title="jQuery"
                />
                <h2 className="certis-name">EducacionIT</h2>
                <p className="certis-info">
                  <FormattedMessage id="about-certis-10" />
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ScrollToTop />

      <Footer />
    </div>
  );
};
export default About;
