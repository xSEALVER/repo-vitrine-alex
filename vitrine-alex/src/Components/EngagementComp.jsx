// import React from "react";
// import sampleImage from "../assets/vision.jpg"; // Replace with your image path
// import anotherImage from "../assets/vision.jpg"; // Replace with your second image path

// const EngagementComp = () => {
//   return (
//     <>
//     <div id="Engagement">

//     </div>
//       <div>

//       </div>
//       <div
//         className="relative flex flex-col lg:flex-row items-center w-full h-screen bg-black text-white"
//         data-aos="fade-up"
//         data-aos-delay="500"
//         id="Engagement"
//       >
//         {/* Left Section: Full-Screen Image */}
//         <div className="w-full lg:w-1/2 h-full">
//           <img
//             src={sampleImage}
//             alt="Featured"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Right Section: Text */}
//         <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 h-full bg-[#EDEDED]">
//           <h2 className="uppercase text-5xl font-semibold tracking-widest mb-20 text-black">
//             Accompagnement Personnalisé
//           </h2>
//           <p className="text-xl text-gray-500 mb-6">
//             Notre equipe dediee offre un accompagnement personallise pour
//             faciliter les deplacements, en mettant l'accent sur la securite, le
//             confort et l'efficacite.
//           </p>
//         </div>
//       </div>

//       {/* Second Section: Text Left, Image Right */}
//       <div
//         className="relative flex flex-col lg:flex-row items-center w-full h-screen bg-black text-white"
//         data-aos="fade-left"
//         data-aos-delay="500"
//       >
//         {/* Left Section: Text */}
//         <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 h-full bg-[#EDEDED] text-black">
//           <h2 className="uppercase text-5xl font-semibold tracking-widest mb-20">
//             Mobilite durable
//           </h2>
//           <p className="text-xl text-gray-500 mb-6">
//             Nous nous engageons a promouvoir une mobilite durable en integrant
//             des solutions respectueuses de l'environment et en encourageant
//             l'adoption de modes de transport ecologiques et eco-responsables.
//           </p>
//         </div>

//         {/* Right Section: Full-Screen Image */}
//         <div className="w-full lg:w-1/2 h-full">
//           <img
//             src={anotherImage}
//             alt="Another Featured"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>

//       <div
//         className="relative flex flex-col lg:flex-row items-center w-full h-screen bg-black text-white"
//         data-aos="fade-right"
//         data-aos-delay="500"
//       >
//         {/* Left Section: Full-Screen Image */}
//         <div className="w-full lg:w-1/2 h-full">
//           <img
//             src={sampleImage}
//             alt="Featured"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Right Section: Text */}
//         <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 h-full bg-[#EDEDED] text-black">
//           <h2 className="uppercase text-5xl font-semibold tracking-widest mb-20">
//             Pourquoi Nous ?
//           </h2>
//           <p className="text-xl text-gray-500 mb-6">
//             Nous adoptons une approche novatrice et une methode de service axee
//             sur l'excellence, en s'efforcant d'offrir des soluitions de mobilite
//             adaptees aux besoins de chacun actuels et futurs.
//           </p>
//           <p className="text-[1rem] text-gray-500 mb-6">
//             Nous bous engageons a fournir des ervices de mobilites fiables,
//             efficaces et personnalioses, en mettant l'accent sur l'innovation et
//             la satisfacion de nos clients.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EngagementComp;

import React from "react";
import sampleImage from "../assets/vision.jpg";
import anotherImage from "../assets/vision.jpg";

const EngagementComp = () => {
  return (
    <div id="Engagement">
      {/* First Section: Image Left, Text Right */}
      <div
        className="scroll-to-engagement px-3 relative flex flex-col lg:flex-row items-center w-full bg-[#EDEDED] text-white"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <div className="w-full md:w-1/2 ">
          <img
            src={sampleImage}
            alt="Featured"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-12 h-full bg-[#EDEDED] text-black">
          <h2 className="uppercase text-2xl md:text-5xl font-semibold tracking-widest mb-6 md:mb-12">
            Accompagnement Personnalisé
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Notre équipe dédiée offre un accompagnement personnalisé pour
            faciliter les déplacements, en mettant l'accent sur la sécurité, le
            confort et l'efficacité.
          </p>
        </div>
      </div>

      {/* Second Section: Text Left, Image Right */}
      <div
        className="relative flex flex-col-reverse md:flex-row items-center w-full min-h-[60vh] md:min-h-[85vh] bg-[#EDEDED] px-3 text-white"
        data-aos="fade-left"
        data-aos-delay="500"
      >
        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-12 bg-[#EDEDED] text-black">
          <h2 className="uppercase text-2xl md:text-5xl font-semibold tracking-widest mb-6 md:mb-12">
            Mobilité Durable
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Nous nous engageons à promouvoir une mobilité durable en intégrant
            des solutions respectueuses de l'environnement et en encourageant
            l'adoption de modes de transport écologiques et éco-responsables.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={anotherImage}
            alt="Another Featured"
            className="w-full h-auto md:h-full object-cover"
          />
        </div>
      </div>

      {/* Third Section: Image Left, Text Right */}
      <div
        className="relative flex flex-col md:flex-row items-center w-full min-h-[60vh] md:min-h-[85vh] bg-[#EDEDED] px-3 text-white"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <div className="w-full md:w-1/2">
          <img
            src={sampleImage}
            alt="Featured"
            className="w-full h-auto md:h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-12 bg-[#EDEDED] text-black">
          <h2 className="uppercase text-2xl md:text-5xl font-semibold tracking-widest mb-6 md:mb-12">
            Pourquoi Nous ?
          </h2>
          <p className="text-lg md:text-xl text-gray-500 mb-4">
            Nous adoptons une approche novatrice et une méthode de service axée
            sur l'excellence, en s'efforçant d'offrir des solutions de mobilité
            adaptées aux besoins actuels et futurs.
          </p>
          <p className="text-lg md:text-xl text-gray-500">
            Nous nous engageons à fournir des services de mobilité fiables,
            efficaces et personnalisés, en mettant l'accent sur l'innovation et
            la satisfaction de nos clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EngagementComp;
