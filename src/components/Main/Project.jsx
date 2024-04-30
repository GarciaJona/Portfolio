// import React from "react";
// import "../../pages/Project/ProjectPage.css";
// import { Link } from "react-router-dom";
// import { ButtomGet } from "../ButtomGet/ButtomGet";

// /* Multi idioma */
// import { FormattedMessage } from "react-intl";

// /* Swiper */
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";

// import { Pagination, Autoplay } from "swiper";

// /* Img */
// const proyectImg = require.context("../../img", true);

// const Project = () => {
//   return (
//     <section className="proyectos" id="proyectos">
//       <h2 className="heading">
//         <FormattedMessage id="projects" />
//       </h2>
//       <div
//         className="proyect-site"
//         data-aos="fade-up"
//         data-aos-easing="ease-out-cubic"
//         data-aos-duration="2000"
//       >
//         <Swiper
//           spaceBetween={30}
//           loop={true}
//           grabCursor={true}
//           centeredSlides={true}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           pagination={{
//             clickable: true,
//           }}
//           modules={[Pagination, Autoplay]}
//           breakpoints={{
//             0: {
//               slidesPerView: 1,
//             },
//             768: {
//               slidesPerView: 2,
//             },
//             1024: {
//               slidesPerView: 3,
//             },
//           }}
//           className="proyectos-slider mySwiper"
//         >
//           {/* Karku */}
//           <SwiperSlide className="caja">
//             <img src={proyectImg(`./proyecto-17.jpg`)} alt="proyectos" />
//             <div className="content">
//               <h3>Karku</h3>
//               <p>E-commerce</p>
//               <p className="tecnologias">
//                 Typescript
//                 <span> -</span> React
//                 <span> -</span> CSS
//                 <span> -</span> MongoDB
//               </p>
//               <a
//                 href="https://karku.com.ar"
//                 className="custom-btn btn-codigo"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <span>Demo</span>
//               </a>
//             </div>
//           </SwiperSlide>
//           {/* Cognity */}
//           <SwiperSlide className="caja">
//             <img src={proyectImg(`./proyecto-14.png`)} alt="proyectos" />
//             <div className="content">
//               <h3>Cognity</h3>
//               <p>Medical Website</p>
//               <p className="tecnologias">
//                 Wordpress
//                 <span> -</span> Php
//                 <span> -</span> CSS
//               </p>
//               <a
//                 href="https://cognity.bio/"
//                 className="custom-btn btn-codigo"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <span>Demo</span>
//               </a>
//             </div>
//           </SwiperSlide>
//           {/* MDCx Campaging */}
//           <SwiperSlide className="caja">
//             <img src={proyectImg(`./proyecto-15.png`)} alt="proyectos" />
//             <div className="content">
//               <h3>MDCX Campaging</h3>
//               <p>Cripto Website</p>
//               <p className="tecnologias">
//                 Wordpress
//                 <span> -</span> Php
//                 <span> -</span> CSS
//               </p>
//               <a
//                 href="https://mdcx.finance/campaign-1000x1000/"
//                 className="custom-btn btn-codigo"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <span>Demo</span>
//               </a>
//             </div>
//           </SwiperSlide>
//           {/* MDCX page */}
//           <SwiperSlide className="caja">
//             <img src={proyectImg(`./proyecto-16.png`)} alt="proyectos" />
//             <div className="content">
//               <h3>MDCX Finance</h3>
//               <p>New Cripto coin</p>
//               <p className="tecnologias">
//                 Wordpress
//                 <span> -</span> Php
//                 <span> -</span> CSS
//               </p>
//               <a
//                 href="https://mdcx.finance/"
//                 className="custom-btn btn-codigo"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <span>Demo</span>
//               </a>
//             </div>
//           </SwiperSlide>
//           {/* Medbot */}
//           <SwiperSlide className="caja">
//             <img src={proyectImg(`./proyecto-13.png`)} alt="proyectos" />
//             <div className="content">
//               <h3>MedBot Clinic</h3>
//               <p>Medical Bot</p>
//               <p className="tecnologias">
//                 Wordpress
//                 <span> -</span> Php
//                 <span> -</span> CSS
//               </p>
//               <a
//                 href="https://medbot.clinic/"
//                 className="custom-btn btn-codigo"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <span>Demo</span>
//               </a>
//             </div>
//           </SwiperSlide>
//           {/* Nabijash */}
//           <SwiperSlide className="caja">
//             <img src={proyectImg(`./proyecto-12.png`)} alt="proyectos" />
//             <div className="content">
//               <p>Nabijash</p>
//               <p>Jobs platform</p>
//               <p className="tecnologias">
//                 Typescript
//                 <span> -</span> CSS3
//                 <span> -</span> NodeJs
//                 <span> -</span> PostgreSql
//                 <span> -</span> Express
//                 <span> -</span> MongoDB
//               </p>
//               <a
//                 href="https://nabijash.vercel.app/"
//                 className="custom-btn btn-codigo"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <span>Demo</span>
//               </a>
//             </div>
//           </SwiperSlide>
//           {/* Trilha */}
//           <SwiperSlide className="caja">
//             <img src={proyectImg(`./proyecto-11.png`)} alt="proyectos" />
//             <div className="content">
//               <h3>Trilha</h3>
//               <p>E-commerce</p>
//               <p className="tecnologias">
//                 Tienda Nube
//                 <span> -</span> CSS3
//               </p>
//               <a
//                 href="https://www.trilhalele.com/"
//                 className="custom-btn btn-codigo"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <span>Demo</span>
//               </a>
//             </div>
//           </SwiperSlide>
//           {/* Il mirtilo */}
//           <SwiperSlide className="caja">
//             <img src={proyectImg(`./proyecto-10.png`)} alt="proyectos" />
//             <div className="content">
//               <h3>Il Mirtilo</h3>
//               <p>E-commerce</p>
//               <p className="tecnologias">
//                 Wordpress
//                 <span> -</span> CSS
//                 <span> -</span> Php
//               </p>
//               <a
//                 href="https://www.ilmirtilotienda.com.ar/"
//                 className="custom-btn btn-codigo"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <span>Demo</span>
//               </a>
//             </div>
//           </SwiperSlide>
//           {/* Guijama */}
//           <SwiperSlide className="caja">
//             <img src={proyectImg(`./proyecto-app-1.png`)} alt="proyectos" />
//             <div className="content">
//               <h3>Guijama</h3>
//               <p>Billing System</p>
//               <p className="tecnologias">
//                 Typescript
//                 <span> -</span> CSS3
//                 <span> -</span> NodeJs
//                 <span> -</span> MongoDB
//               </p>
//               <a
//                 href="https://distribuidora-guijama.vercel.app/"
//                 className="custom-btn btn-codigo"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <span>Demo</span>
//               </a>
//             </div>
//           </SwiperSlide>
//           {/* Moon ideas */}
//           <SwiperSlide className="caja">
//             <img src={proyectImg(`./proyecto-app-2.png`)} alt="proyectos" />
//             <div className="content">
//               <h3>Moon Ideas</h3>
//               <p>E-commerce</p>
//               <p className="tecnologias">
//                 HTML5
//                 <span> -</span> CSS3
//                 <span> -</span> JavaScript
//               </p>
//               <a
//                 href="https://moon-ideas.vercel.app/"
//                 className="custom-btn btn-codigo"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <span>Demo</span>
//               </a>
//             </div>
//           </SwiperSlide>
//           {/* APi Dogs */}
//           <SwiperSlide className="caja">
//             <img src={proyectImg(`./proyecto-app-3.png`)} alt="proyectos" />
//             <div className="content">
//               <h3>Api Dogs</h3>
//               <p></p>
//               <p className="tecnologias">
//                 Javascript
//                 <span> -</span> Redux
//                 <span> -</span> CSS3
//                 <span> -</span> Express
//                 <span> -</span> PostgreSql
//               </p>
//               <a
//                 href="https://github.com/GarciaJona/Pi-Dogs-Henry"
//                 className="custom-btn btn-codigo"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <span>Github</span>
//               </a>
//             </div>
//           </SwiperSlide>
//         </Swiper>
//         <div className="swiper-pagination"></div>
//       </div>
//       <div className="portafolio-btn">
//         <Link to="/project">
//           <ButtomGet />
//         </Link>
//       </div>
//     </section>
//   );
// };
// export default React.memo(Project);



import React from "react";
import "../../pages/Project/ProjectPage.css";
import { Link } from "react-router-dom";
import { ButtomGet } from "../ButtomGet/ButtomGet";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

/* Importa el componente de slider de react-awesome-slider */
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

/* Img */
const proyectImg = require.context("../../img", true);

const Project = () => {
  return (
    <section className="proyectos" id="proyectos">
      <h2 className="heading">
        <FormattedMessage id="projects" />
      </h2>
      <div
        className="proyect-site"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <AwesomeSlider
          bullets={false}
          className="proyectos-slider"
        >
          {/* Slides de proyectos */}
          <div className="caja">
            <img src={proyectImg(`./proyecto-17.jpg`)} alt="proyectos" />
            <div className="content">
              <h3>Karku</h3>
              <p>E-commerce</p>
              <p className="tecnologias">
                Typescript
                <span> -</span> React
                <span> -</span> CSS
                <span> -</span> MongoDB
              </p>
              <a
                href="https://karku.com.ar"
                className="custom-btn btn-codigo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Demo</span>
              </a>
            </div>
          </div>
          {/* Agregar más slides de proyectos aquí */}
        </AwesomeSlider>
      </div>
      <div className="portafolio-btn">
        <Link to="/project">
          <ButtomGet />
        </Link>
      </div>
    </section>
  );
};
export default React.memo(Project);
