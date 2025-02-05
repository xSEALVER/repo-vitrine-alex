import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "TRANSPORT SUR MESURE",
    icon: (
      <FaCameraRetro className="text-5xl text-primary  group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Nous proposons des solutions de transport ppour les particuliers et les entreprises, adaptées à chaque situation et a chaque demande.",
    aosDelay: "0",
  },
  {
    name: "Accompagnement Personnalisé",
    icon: (
      <GiNotebook className="text-5xl text-primary   group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Notre équipe dediée offre un accompagnement personnalisé pour faciiter les déplacements quotidiens et professionnels, en mettant l'accent sur la sécurité, le confort et l'éfficacité .",
    aosDelay: "500",
  },
  {
    name: "Mobilité Durable",
    icon: (
      <SlNote className="text-5xl text-primary   group-hover:text-black duration-500" />
    ),
    link: "#",
    description: "Nous nous engageons à promouvoir une mobilité durable en proposant des solutions de transport respectueuses de l'environnement et encourageant l'adoption de mode de transport  .",
    aosDelay: "1000",
  },
];
const ServicesComp = () => {
  return (
    <>
      <div id="Services" className=" py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h2
              data-aos="fade-left"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              Nos Services
            </h2>
          </div>
          <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-4 mb-[10rem]">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center bg-black group space-y-3 sm:space-y-6 mx-4 p-4 sm:py-16 bg-dark  hover:bg-primary duration-300 text-white hover:text-black hover:bg-yellow-400 rounded-lg"
              >
                <div className="grid place-items-center">{skill.icon}</div>
                <h1 className="text-2xl font-bold">{skill.name}</h1>
                <p>{skill.description}</p>
                <a
                  href={skill.link}
                  className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300"
                >
                  Learn more
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="Contact"></div>
    </>
  );
};

export default ServicesComp;