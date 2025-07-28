// import imgStory from "../assets/history-img.jpg"; // Replace with your image path
// import { MdOutlineMail } from "react-icons/md";

// const AboutComp = () => {
//   return (
//     <section
//       className="flex flex-col items-center text-center py-16 px-4"
//       id="Apropos"
//     >
//       {/* First Section */}
//       <div
//         className="max-w-3xl mt-10 mb-10"
//         data-aos="fade-left"
//         data-aos-delay="500"
//       >
//         <h2 className="text-2xl md:text-3xl font-semibold text-[#EB7526] mb-4 uppercase">
//           Un peu d'histoire
//         </h2>
//         <p className="text-gray-700">
//           En tant que garage automobile réputé, nous sommes à votre disposition
//           pour tous les problèmes liés à votre voiture. Nous examinons votre
//           véhicule, établissons un rapport détaillé des défauts et vous
//           conseillons sur les réparations recommandées et nécessaires, que nous
//           effectuons pour vous dans les meilleurs délais dans notre atelier.
//         </p>
//       </div>

//       {/* Second Section */}
//       <div
//         className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-16 w-full"
//         data-aos="fade-up"
//         data-aos-delay="500"
//       >
//         <div className="md:w-1/2 text-left">
//           <h2 className="text-2xl font-semibold text-[#EB7526]">
//             UN PEU D'HISTOIRE
//           </h2>
//           <p className="text-gray-600 mt-2">
//             Lorem ipsum dolor sit amet, consetetur sadipscing elitr
//           </p>
//           <p className="text-gray-700 mt-4 leading-relaxed">
//             Eu turpis egestas pretium aenean pharetra magna ac. Faucibus a
//             pellentesque sit amet porttitor eget dolor morbi non. Turpis egestas
//             sed tempus urna et. Et molestie ac feugiat sed lectus vestibulum
//             mattis. Nam aliquam sem et tortor consequat id porta nibh venenatis.
//             Accumsan in nisl nisi scelerisque eu ultrices vitae auctor.
//           </p>
//         </div>
//         <div className="md:w-1/2 flex justify-center">
//           <img src={imgStory} alt="MC Logo" className="w-3/4 opacity-80" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutComp;

import imgStory from "../assets/history-img.jpg"; // Replace with your image path
import { MdOutlineMail } from "react-icons/md";

const AboutComp = () => {
  return (
    <section
      className="flex flex-col items-center text-center py-16 px-4"
      id="À propos"
    >
      {/* First Section */}
      {/* <div
        className="max-w-3xl mt-10 mb-10"
        data-aos="fade-left"
        data-aos-delay="500"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-[#EB7526] mb-4 uppercase">
          Un peu d'histoire
        </h2>
        <p className="text-gray-700">
          En tant que garage automobile réputé, nous sommes à votre disposition
          pour tous les problèmes liés à votre voiture. Nous examinons votre
          véhicule, établissons un rapport détaillé des défauts et vous
          conseillons sur les réparations recommandées et nécessaires, que nous
          effectuons pour vous dans les meilleurs délais dans notre atelier.
        </p>
      </div> */}

      {/* Second Section */}
      <div
        className="flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-16 w-full"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <div className="md:w-1/2 text-left mb-8 md:mb-0">
          <h2 className="text-2xl font-semibold text-[#EB7526]">
            UN PEU D'HISTOIRE
          </h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Eu turpis egestas pretium aenean pharetra magna ac. Faucibus a
            pellentesque sit amet porttitor eget dolor morbi non. Turpis egestas
            sed tempus urna et. Et molestie ac feugiat sed lectus vestibulum
            mattis. Nam aliquam sem et tortor consequat id porta nibh venenatis.
            Accumsan in nisl nisi scelerisque eu ultrices vitae auctor.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={imgStory} alt="MC Logo" className="w-full md:w-3/4 opacity-80" />
        </div>
      </div>
    </section>
  );
};

export default AboutComp;
