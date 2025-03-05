import React from "react";
import sampleImage from "../assets/vision.jpg"; // Replace with your image path
import anotherImage from "../assets/vision.jpg"; // Replace with your second image path

const EngagementComp = () => {
  return (
    <>
    <div id="Engagement">

    </div>
      <div>

      </div>
      <div
        className="relative flex flex-col lg:flex-row items-center w-full h-screen bg-black text-white"
        data-aos="fade-up"
        data-aos-delay="500"
        id="Engagement"
      >
        {/* Left Section: Full-Screen Image */}
        <div className="w-full lg:w-1/2 h-full">
          <img
            src={sampleImage}
            alt="Featured"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Section: Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 h-full bg-[#EDEDED]">
          <h2 className="uppercase text-5xl font-semibold tracking-widest mb-20 text-black">
            Accompagnement Personnalisé
          </h2>
          <p className="text-xl text-gray-500 mb-6">
            Notre equipe dediee offre un accompagnement personallise pour
            faciliter les deplacements, en mettant l'accent sur la securite, le
            confort et l'efficacite.
          </p>
        </div>
      </div>

      {/* Second Section: Text Left, Image Right */}
      <div
        className="relative flex flex-col lg:flex-row items-center w-full h-screen bg-black text-white"
        data-aos="fade-left"
        data-aos-delay="500"
      >
        {/* Left Section: Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 h-full bg-[#EDEDED] text-black">
          <h2 className="uppercase text-5xl font-semibold tracking-widest mb-20">
            Mobilite durable
          </h2>
          <p className="text-xl text-gray-500 mb-6">
            Nous nous engageons a promouvoir une mobilite durable en integrant
            des solutions respectueuses de l'environment et en encourageant
            l'adoption de modes de transport ecologiques et eco-responsables.
          </p>
        </div>

        {/* Right Section: Full-Screen Image */}
        <div className="w-full lg:w-1/2 h-full">
          <img
            src={anotherImage}
            alt="Another Featured"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div
        className="relative flex flex-col lg:flex-row items-center w-full h-screen bg-black text-white"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        {/* Left Section: Full-Screen Image */}
        <div className="w-full lg:w-1/2 h-full">
          <img
            src={sampleImage}
            alt="Featured"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Section: Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 h-full bg-[#EDEDED] text-black">
          <h2 className="uppercase text-5xl font-semibold tracking-widest mb-20">
            Pourquoi Nous ?
          </h2>
          <p className="text-xl text-gray-500 mb-6">
            Nous adoptons une approche novatrice et une methode de service axee
            sur l'excellence, en s'efforcant d'offrir des soluitions de mobilite
            adaptees aux besoins de chacun actuels et futurs.
          </p>
          <p className="text-[1rem] text-gray-500 mb-6">
            Nous bous engageons a fournir des ervices de mobilites fiables,
            efficaces et personnalioses, en mettant l'accent sur l'innovation et
            la satisfacion de nos clients.
          </p>
        </div>
      </div>
    </>
  );
};

export default EngagementComp;
