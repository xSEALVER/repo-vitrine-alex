// // import React from 'react'
// import imageAcc from "../assets/airport-img.jpg";

// import React from "react";

// const ObjectifComp = () => {
//   return (
//     <>
//       <div id="Objectif"></div>
//       <div></div>
//       <div
//         className="flex bg-[#EDEDED] items-stretch duration-300 rounded-lg p-6 max-w-[calc(100%-390px)] mx-auto mt-[4rem] mb[4rem] h-[85vh] gap-8"
//         id="Objectif"
//         data-aos="fade-left"
//         data-aos-delay="500"
//       >
//         {/* Texte */}
//         <div className="w-full md:w-1/2 p-4 flex flex-col justify-center mb-[12rem]">
//           <h2
//             className="text-[2.4rem] font-bold text-[#EB7526] mb-14 uppercase"
//             data-aos="fade-left"
//             data-aos-delay="500"
//           >
//             Notre vision
//           </h2>
//           <p
//             className="text-gray-700 text-[1.4rem] mb-6"
//             data-aos="fade-left"
//             data-aos-delay="500"
//           >
//             Nous nous engageons à transformer la manière dont les déplacements
//             sont perçus et vécus, en offrant des solutions de mobilité
//             innovantes et durables.
//           </p>
//           <p
//             className="text-gray-700 text-[1.4rem] "
//             data-aos="fade-left"
//             data-aos-delay="500"
//           >
//             Aude Mobilité s'efforce de repousser les limites de la mobilité en
//             proposant des services adaptés aux besoins de chacun, tout en
//             respectant l'environnement et en favorisant l'inclusion sociale.
//           </p>
//         </div>

//         {/* Image */}
//         <div className="w-full md:w-1/2">
//           <img
//             src={imageAcc} // Chemin de l'image
//             alt="Vision image"
//             className="rounded-lg w-full h-full object-cover"
//             style={{ height: "100%" }} // Adapte automatiquement à la hauteur du texte
//           />
//         </div>
//       </div>

//       {/* Deuxième div inversée : image à gauche et texte à droite */}
//       <div
//         className="flex bg-[#EDEDED] items-stretch duration-300 rounded-lg p-6 max-w-[calc(100%-390px)] mx-auto h-[85vh] gap-8 mb-[6rem] mt-[6rem]"
//         data-aos="fade-right"
//         data-aos-delay="4000"
//       >
//         {/* Image */}
//         <div className="w-full md:w-1/2">
//           <img
//             src={imageAcc} // Chemin de l'image
//             alt="Vision image"
//             className="rounded-lg w-full h-full object-cover"
//             style={{ height: "100%" }} // Adapte automatiquement à la hauteur du texte
//           />
//         </div>

//         {/* Texte aligné à droite */}
//         <div className="w-full md:w-1/2 p-4 flex flex-col justify-center text-right">
//           <h2
//             className="text-[2.4rem] font-bold text-[#EB7526] mb-14 uppercase"
//             data-aos="fade-right"
//             data-aos-delay="500"
//           >
//             Notre mission
//           </h2>
//           <p
//             className="text-gray-700 text-[1.4rem] mb-6"
//             data-aos="fade-right"
//             data-aos-delay="500"
//           >
//             Nous offrons une gamme de complète de services de mobilité sur
//             mesure, repondant aux mesure, repondant aux besoins individuels et
//             collectifs de nos clients
//           </p>
//           <p
//             className="text-gray-700 text-[1.4rem]"
//             data-aos="fade-right"
//             data-aos-delay="500"
//           >
//             Aude Mobilité s'efforce de repousser les limites de la mobilité en
//             proposant des services adaptés aux besoins de chacun, tout en
//             respectant l'environnement et en favorisant l'inclusion sociale.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ObjectifComp;

import imageAcc from "../assets/airport-img.jpg";
import React from "react";

const ObjectifComp = () => {
  return (
    <>
      <div id="Objectif"></div>

      {/* First Section */}
      <div
        className="flex flex-col md:flex-row bg-[#EDEDED] items-center md:items-stretch duration-300 rounded-lg p-6 max-w-[90%] mx-auto mt-16 mb-16 min-h-[60vh] md:min-h-[85vh] gap-8"
        data-aos="fade-left"
        data-aos-delay="500"
      >
        {/* Text */}
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-2xl md:text-[2.4rem] font-bold text-[#EB7526] mb-6 md:mb-14 uppercase">
            Notre vision
          </h2>
          <p className="text-gray-700 text-lg md:text-[1.4rem] mb-6">
            Nous nous engageons à transformer la manière dont les déplacements
            sont perçus et vécus, en offrant des solutions de mobilité
            innovantes et durables.
          </p>
          <p className="text-gray-700 text-lg md:text-[1.4rem]">
            Aude Mobilité s'efforce de repousser les limites de la mobilité en
            proposant des services adaptés aux besoins de chacun, tout en
            respectant l'environnement et en favorisant l'inclusion sociale.
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={imageAcc}
            alt="Vision image"
            className="rounded-lg w-full h-auto md:h-full object-cover"
          />
        </div>
      </div>

      {/* Second Section (Reversed Layout) */}
      <div
        className="flex flex-col-reverse md:flex-row bg-[#EDEDED] items-center md:items-stretch duration-300 rounded-lg p-6 max-w-[90%] mx-auto min-h-[60vh] md:min-h-[85vh] gap-8 mb-16"
        data-aos="fade-right"
        data-aos-delay="400"
      >
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={imageAcc}
            alt="Mission image"
            className="rounded-lg w-full h-auto md:h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center text-center md:text-right">
          <h2 className="text-2xl md:text-[2.4rem] font-bold text-[#EB7526] mb-6 md:mb-14 uppercase">
            Notre mission
          </h2>
          <p className="text-gray-700 text-lg md:text-[1.4rem] mb-6">
            Nous offrons une gamme complète de services de mobilité sur mesure,
            répondant aux besoins individuels et collectifs de nos clients.
          </p>
          <p className="text-gray-700 text-lg md:text-[1.4rem]">
            Aude Mobilité s'efforce de repousser les limites de la mobilité en
            proposant des services adaptés aux besoins de chacun, tout en
            respectant l'environnement et en favorisant l'inclusion sociale.
          </p>
        </div>
      </div>
    </>
  );
};

export default ObjectifComp;
