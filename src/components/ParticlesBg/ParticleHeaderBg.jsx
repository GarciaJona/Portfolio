// import React from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

// export default function ParticleHeaderBg() {
//   const particlesInit = async (main) => {
//     try {
//       await loadFull(main);
//     } catch (error) {
//       console.error("Error initializing particles:", error);
//     }
//   };

//   const particlesLoaded = (container) => {};

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       loaded={particlesLoaded}
//       className="particles-2-css"
//       options={{
//         background: {
//           position: "50% 50%",
//           repeat: "no-repeat",
//           size: "cover",
//           color: "#000",
//         },
//         fullScreen: {
//           enable: false,
//         },
//         interactivity: {
//           detect_on: "canvas",
//           events: {
//             onhover: {
//               enable: false,
//               mode: "bubble",
//             },
//             onclick: {
//               enable: false,
//               mode: "repulse",
//             },
//             resize: true,
//           },
//           modes: {
//             bubble: {
//               distance: 400,
//               duration: 2,
//               opacity: 0.8,
//               size: 10,
//               divs: {
//                 distance: 200,
//                 duration: 0.4,
//                 mix: false,
//                 selectors: [],
//               },
//             },
//             grab: {
//               distance: 400,
//               line_linked: {
//                 opacity: 0.5,
//               },
//             },
//             repulse: {
//               distance: 200,
//               duration: 0.4,
//             },
//             push: {
//               particles_nb: 4,
//             },
//             remove: {
//               particles_nb: 2,
//             },
//           },
//         },
//         particles: {
//           number: {
//             value: 400,
//             density: {
//               enable: true,
//               value_area: 800,
//             },
//           },
//           color: {
//             value: "#fff",
//           },
//           shape: {
//             type: "circle",
//             stroke: {
//               width: 0,
//               color: "#000000",
//             },
//             polygon: {
//               nb_sides: 5,
//             },
//             image: {
//               src: "img/github.svg",
//               width: 100,
//               height: 100,
//             },
//           },
//           opacity: {
//             value: 0.5,
//             random: true,
//             anim: {
//               enable: false,
//               speed: 1,
//               opacity_min: 0.1,
//               sync: false,
//             },
//           },
//           size: {
//             value: 3,
//             random: true,
//             anim: {
//               enable: false,
//               speed: 40,
//               size_min: 0.1,
//               sync: false,
//             },
//           },
//           line_linked: {
//             enable: false,
//             distance: 500,
//             color: "#ffffff",
//             opacity: 0.4,
//             width: 2,
//           },
//           move: {
//             enable: true,
//             speed: 0.5,
//             direction: "none",
//             random: false,
//             straight: false,
//             out_mode: "out",
//             bounce: false,
//             attract: {
//               enable: false,
//               rotateX: 600,
//               rotateY: 1200,
//             },
//           },
//         },
//         retina_detect: true,
//       }}
//     />
//   );
// }
