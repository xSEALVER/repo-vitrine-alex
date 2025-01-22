// import React from 'react'
import imageAcc from "../assets/airport-img.jpg";

import React from "react";

const MainHomeComponents = () => {
  return (
    <>
      <div className="flex bg-white items-stretch duration-300 rounded-lg p-6 max-w-[calc(100%-390px)] mx-auto mt-10 h-[85vh] gap-8">
        {/* Texte */}
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
          <h2 className="text-[2.4rem] font-bold text-orange-500 mb-14 uppercase">
            Notre vision
          </h2>
          <p className="text-gray-700 text-[1.4rem] mb-6">
            Nous nous engageons à transformer la manière dont les déplacements
            sont perçus et vécus, en offrant des solutions de mobilité
            innovantes et durables.
          </p>
          <p className="text-gray-700 text-[1.4rem] ">
            Aude Mobilité s'efforce de repousser les limites de la mobilité en
            proposant des services adaptés aux besoins de chacun, tout en
            respectant l'environnement et en favorisant l'inclusion sociale.
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={imageAcc} // Chemin de l'image
            alt="Vision image"
            className="rounded-lg w-full h-full object-cover"
            style={{ height: "100%" }} // Adapte automatiquement à la hauteur du texte
          />
        </div>
      </div>

      {/* Deuxième div inversée : image à gauche et texte à droite */}
      <div className="flex bg-white items-stretch duration-300 rounded-lg p-6 max-w-[calc(100%-390px)] mx-auto h-[85vh] gap-8">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={imageAcc} // Chemin de l'image
            alt="Vision image"
            className="rounded-lg w-full h-full object-cover"
            style={{ height: "100%" }} // Adapte automatiquement à la hauteur du texte
          />
        </div>

        {/* Texte aligné à droite */}
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center text-right">
          <h2 className="text-[2.4rem] font-bold text-orange-500 mb-14 uppercase">
            Notre services
          </h2>
          <p className="text-gray-700 text-[1.4rem] mb-6">
            Nous offrons une gamme de complète de services de mobilité sur
            mesure, repondant aux mesure, repondant aux besoins individuels et
            collectifs de nos clients
          </p>
          <p className="text-gray-700 text-[1.4rem] ">
            Aude Mobilité s'efforce de repousser les limites de la mobilité en
            proposant des services adaptés aux besoins de chacun, tout en
            respectant l'environnement et en favorisant l'inclusion sociale.
          </p>
        </div>
      </div>
    </>
  );
};

export default MainHomeComponents;
