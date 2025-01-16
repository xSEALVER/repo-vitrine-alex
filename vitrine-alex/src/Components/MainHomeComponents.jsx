// import React from 'react'
// import imgTest from '../assets/test.jpg';
import imgAirport from '../assets/airport-img.jpg';
// import imgVenice from '../assets/venice-img.jpg';
// import imgBeach from '../assets/beach-img.jpg';


// const MainHomeComponents = () => {
//   return (
//     <>
//         <div className=' mt-5 mb-5'>
//             <h1 className='text-center'>Évasions Inoubliables</h1>
//             <p className='text-center'>Explorez les joyaux du monde et laissez-vous emporter par des aventures captivantes en un rien de temps.</p>
//         </div>


//             <div className=" flex items-center p-4">
//                 <img
//                     src={imgAirport}
//                     alt="Description"
//                     width="500"
//                     height="370"
//                     className="img-fluid"
//                 />
//                 <div className="ml-3 text-center flex-grow-1 lh-lg">
//                     <p className='text-center'>
//                     Avec Trippy, choisir et réserver des destinations incroyables n'a jamais été aussi simple. 
//                     Notre interface vous permet de découvrir des options fascinantes sans distraction, tout en vous offrant une mise en page claire et intuitive. Profitez d'une expérience de réservation fluide et sans hésitation, 
//                     où chaque étape est optimisée pour vous aider à trouver la destination parfaite pour vos prochaines aventures.
//                     </p>
//                 </div>
//             </div>

//             <div className="flex items-center p-4">
//                 <div className="ml-3 text-center flex-grow-1 lh-lg">
//                     <p>
//                         Découvrez un monde de possibilités avec Trippy, 
//                         où un nombre infini de destinations vous attend. 
//                         Que vous rêviez d'évasion exotique ou de découvertes locales, 
//                         notre service vous offre un accès sans limite à des choix variés et captivants. 
//                         Plongez dans une expérience de réservation unique et trouvez la destination idéale pour chaque envie, 
//                         tout en profitant d'une interface facile à utiliser et parfaitement adaptée à vos besoins.
//                     </p>
//                 </div>
//                 <img
//                     src={imgVenice}
//                     alt="Description"
//                     width="500"
//                     height="370"
//                     className="img-fluid"
//                 />
//             </div>

//             <div className="flex items-center p-4">
//                 <img
//                     src={imgBeach}
//                     alt="Description"
//                     width="500"
//                     height="370"
//                     className="img-fluid"
//                 />
//                 <div className="ml-3 text-center flex-grow-1 lh-lg">
//                     <p className='text-center'>
//                     Profitez de voyages exceptionnels à des prix bas et abordables grâce à notre plateforme. 
//                     Nous nous engageons à vous offrir des options économiques qui conviennent à tous les budgets, 
//                     sans sacrifier la qualité. 
//                     Explorez une large sélection de destinations à des tarifs avantageux et réalisez vos projets de voyage sans souci financier. 
//                     Avec nous, chaque aventure devient accessible et plaisante.
//                     </p>
//                 </div>
//             </div>
//     </>
//   )
// }

// export default MainHomeComponents

import React from 'react';

const MainHomeComponents = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-5">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-5xl font-bold text-[#FF5722]">LOREM</h2>
          
          <h3 className="text-2xl text-gray-700">
            Full cleaning and housekeeping services for companies and households.
          </h3>
          
          <p className="text-gray-600 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum is simply
          </p>
          
          <button className="bg-gray-800 text-white px-8 py-3 hover:bg-gray-700 transition-colors duration-300">
            Read More
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img 
            src={imgAirport} 
            alt="Coffee cup with latte art next to a book and glasses" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>


      <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-5">

        {/* Left Image */}
        <div className="flex-1">
          <img 
            src={imgAirport} 
            alt="Coffee cup with latte art next to a book and glasses" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-5xl font-bold text-[#FF5722]">LOREM</h2>
          
          <h3 className="text-2xl text-gray-700">
            Full cleaning and housekeeping services for companies and households.
          </h3>
          
          <p className="text-gray-600 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum is simply
          </p>
          
          <button className="bg-gray-800 text-white px-8 py-3 hover:bg-gray-700 transition-colors duration-300">
            Read More
          </button>
        </div>

      </div>


      <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-5">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-5xl font-bold text-[#FF5722]">LOREM</h2>
          
          <h3 className="text-2xl text-gray-700">
            Full cleaning and housekeeping services for companies and households.
          </h3>
          
          <p className="text-gray-600 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum is simply
          </p>
          
          <button className="bg-gray-800 text-white px-8 py-3 hover:bg-gray-700 transition-colors duration-300">
            Read More
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img 
            src={imgAirport} 
            alt="Coffee cup with latte art next to a book and glasses" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default MainHomeComponents;