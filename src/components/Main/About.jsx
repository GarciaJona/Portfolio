import React from "react";
import { useEffect } from "react";
import "../../pages/About/AboutPage.css";
import { Link } from "react-router-dom";
import cv from "../../cv/cv.pdf";
import { ButtomGet } from "../ButtomGet/ButtomGet";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="sobre-mi" id="sobre-mi">
      <h2 className="heading">
        <FormattedMessage id="about" />
      </h2>

      <div className="row container">
        <div className="columns" data-aos="fade-right" data-aos-delay="300">
          <h3>
            <FormattedMessage id="im" />
          </h3>
          <h4>
            <FormattedMessage id="description" />
          </h4>
          <p>
            <FormattedMessage id="my-description" />
          </p>
          <ul>
            <li>
              <p>
                <span>
                  <FormattedMessage id="years" />
                </span>
                32
              </p>
            </li>
            <li>
              <p>
                <span>Hobbies: </span>
                Volleyball, cinema, videogames
              </p>
            </li>
            <li>
              <p>
                <span>Email:</span> jalexisgarcia.91@gmail.com
              </p>
            </li>
            <li>
              <p>
                <span>
                  <FormattedMessage id="from" />
                </span>
                Buenos Aires, Argentina
              </p>
            </li>
          </ul>
          <div className="mas-info">
            <a
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              download="cv.pdf"
              className="btn-codigo buttonDownload"
            >
              <FormattedMessage id="btn-cv" />
            </a>
            <div className="mas-info-btn">
              <Link to="/about">
                <ButtomGet />
              </Link>
            </div>
          </div>
        </div>
        <div
          className="columns col-skill"
          data-aos="fade-left"
          data-aos-delay="650"
        >
          <h3>skills</h3>
          <h4>Front-End</h4>
          <div className="skill">
            <div>
              <img
                alt="HTML"
                className="icons-skils"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
              />
              <h5>HTML</h5>
            </div>
            <div>
              <img
                alt="CSS"
                className="icons-skils"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
              />
              <h5>CSS</h5>
            </div>
            <div>
              <img
                alt="Js"
                className="icons-skils"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
              />
              <h5>JavaScript</h5>
            </div>
            <div>
              <img
                alt="Sass"
                className="icons-skils"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
              />
              <h5>Sass</h5>
            </div>
            <div>
              <img
                alt="Bootstrap"
                className="icons-skils"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              />
              <h5>Bootstrap</h5>
            </div>
            <div>
              <img
                alt="MaterialUI"
                className="icons-skils"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
              />
              <h5>Material UI</h5>
            </div>
            <div>
              <img
                alt="React"
                className="icons-skils"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              />
              <h5>React</h5>
            </div>
            <div>
              <img
                alt="Typescript"
                className="icons-skils"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              />
              <h5>Typescript</h5>
            </div>
          </div>
          <h4>Back-End</h4>
          <div className="skill">
            <div>
              <img
                alt="Nodejs"
                className="icons-skils"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              />
              <h5>NodeJs</h5>
            </div>
            <div>
              <img
                alt="express"
                className="icons-skils"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              />
              <h5>Express</h5>
            </div>
            <div>
              <img
                alt="mongodb"
                className="icons-skils"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg"
              />
              <h5>MongodDB</h5>
            </div>
            <div>
              <img
                alt="php"
                className="icons-skils"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
              />
              <h5>PHP</h5>
            </div>
          </div>
          <h4>
            <FormattedMessage id="tools" />
          </h4>
          <div className="skill">
            <div>
              <img
                alt="figma"
                className="icons-skils"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                title="figma"
              />
              <h5>Figma</h5>
            </div>
            <div>
              <img
                alt="photoshop"
                className="icons-skils"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
                title="Photoshop"
              />
              <h5>Photoshop</h5>
            </div>
            <div>
              <img
                alt="Visual Studio Code"
                className="icons-skils"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png"
                title="Visual Studio Code"
              />
              <h5>VS Code</h5>
            </div>
            <div>
              <img
                alt="git"
                className="icons-skils"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                title="git"
              />
              <h5>Git</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default React.memo(About);
