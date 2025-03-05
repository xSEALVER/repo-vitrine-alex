import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS CSS import
import imageAcc from "../assets/car-accueil.jpg";

const HeroComp = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="all-containers relative w-full h-screen">
      {/* Background Image */}
      <img className="w-full h-full object-cover" src={imageAcc} alt="Accueil" />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1
          data-aos="fade-up"
          data-aos-delay="600"
          className="text-5xl lg:text-7xl font-bold font-serif text-white"
        >
          L'avenir de la mobilité est là
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="1000"
          className="font-semibold text-white text-[1.2rem] max-w-4xl mt-6"
        >
          Avec Aude Mobilité, trouvez des solutions de transport adaptés à vos
          besoins. Nous nous engageons à vous offrir des options sur mesure
          pour faciliter vos déplacements et améliorer votre quotidien.
        </p>
      </div>
    </div>
  );
};

export default HeroComp;
