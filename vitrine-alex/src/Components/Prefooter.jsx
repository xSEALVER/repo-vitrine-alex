// import React from 'react';
// import imgTest from '../assets/test.jpg';
// import img1 from '../assets/three-1.jpg';
// import img2 from '../assets/three-2.jpg';
// import img3 from '../assets/az_img.jpg';

// const Prefooter = () => {
//     return (
//         <>
//             {/* Heading Section */}
//             <div className="text-center mt-5">
//                 <h1 className="text-2xl font-semibold">Voyages Récents</h1>
//                 <p className="mt-2 text-gray-600">Vous pouvez découvrir des destinations uniques en utilisant Google Maps.</p>
//             </div>

//             {/* Card Container */}
//             <div className="flex justify-center items-center gap-5 mt-5">
//                 {/* Card 1 */}
//                 <div className="bg-white shadow-md rounded-lg overflow-hidden w-72 h-96">
//                     <img 
//                         src={img1} 
//                         alt="Namibie" 
//                         className="w-full h-1/2 object-cover"
//                     />
//                     <div className="p-4 h-1/2 overflow-auto">
//                         <h6 className="text-sm text-gray-500">Namibie</h6>
//                         <h6 className="text-lg font-bold mt-2">Un paysage désertique envoûtant :</h6>
//                         <p className="text-sm text-gray-700 mt-2">
//                             Dunes majestueuses, arbres morts sculptés par le temps, ciel étoilé spectaculaire. 
//                             Une expérience unique pour les amateurs de nature sauvage et de photographie.
//                         </p>
//                     </div>
//                 </div>

//                 {/* Card 2 */}
//                 <div className="bg-white shadow-md rounded-lg overflow-hidden w-72 h-96">
//                     <img 
//                         src={img2} 
//                         alt="Pays-Bas" 
//                         className="w-full h-1/2 object-cover"
//                     />
//                     <div className="p-4 h-1/2 overflow-auto">
//                         <h6 className="text-sm text-gray-500">Pays-Bas</h6>
//                         <h6 className="text-lg font-bold mt-2">Vue époustouflante sur canyon escarpé :</h6>
//                         <p className="text-sm text-gray-700 mt-2">
//                             Falaises vertigineuses, silhouette solitaire sur le rebord, panorama désertique à l'horizon. 
//                             Paradis des randonneurs et amateurs de sensations fortes.
//                         </p>
//                     </div>
//                 </div>

//                 {/* Card 3 */}
//                 <div className="bg-white shadow-md rounded-lg overflow-hidden w-72 h-96">
//                     <img 
//                         src={img3} 
//                         alt="Namibie" 
//                         className="w-full h-1/2 object-cover"
//                     />
//                     <div className="p-4 h-1/2 overflow-auto">
//                         <h6 className="text-sm text-gray-500">Namibie</h6>
//                         <h6 className="text-lg font-bold mt-2">Coucher de soleil spectaculaire dans l'Arizona :</h6>
//                         <p className="text-sm text-gray-700 mt-2">
//                             Cactus saguaro majestueux, ciel enflammé aux couleurs chaudes, 
//                             silhouette de montagnes lointaines. Moment magique pour les amoureux de la nature.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Prefooter;

import React from 'react';

// Importation des polices via une balise link dans le HTML de l'application
// <link href="https://fonts.googleapis.com/css?family=Cardo:400i|Rubik:400,700&display=swap" rel="stylesheet">

const Prefooter = () => {
  const cards = [
    {
      title: 'Mountain View',
      copy: 'Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains',
      button: 'View Trips',
      image: 'https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
    },
    {
      title: 'To The Beach',
      copy: 'Plan your next beach trip with these fabulous destinations',
      button: 'View Trips',
      image: 'https://images.unsplash.com/photo-1533903345306-15d1c30952de?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
    },
    {
      title: 'Desert Destinations',
      copy: "It's the desert you've always dreamed of",
      button: 'Book Now',
      image: 'https://images.unsplash.com/photo-1545243424-0ce743321e11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
    },
    {
      title: 'Explore The Galaxy',
      copy: 'Seriously, straight up, just blast off into outer space today',
      button: 'Book Now',
      image: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
    }
  ];

  const Card = ({ title, copy, button, image }) => (
    <div className="relative flex items-end overflow-hidden p-4 w-full text-center text-white bg-gray-100 rounded-lg group h-[350px]
                    shadow-[0_1px_1px_rgba(0,0,0,0.1),0_2px_2px_rgba(0,0,0,0.1),0_4px_4px_rgba(0,0,0,0.1),0_8px_8px_rgba(0,0,0,0.1),0_16px_16px_rgba(0,0,0,0.1)]">
      {/* Background Image avec overlay gradient */}
      <div 
        className="absolute inset-0 w-full h-[110%] bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-[-4%]"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: '0 0',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent  translate-y-[-50%] transition-transform duration-[1400ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-[-50%]" />
      </div>

      {/* Contenu */}
      <div className="relative flex flex-col items-center w-full p-4 z-10 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] translate-y-[calc(100%-4.5rem)] group-hover:translate-y-0">
        <h2 className="text-xl font-bold leading-tight font-rubik mb-4">{title}</h2>
        
        <p className="font-cardo text-lg italic leading-relaxed opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:opacity-100 group-hover:translate-y-0 delay-100 mb-6">
          {copy}
        </p>
        
        <button className="cursor-pointer mt-6 py-3 px-6 text-xs font-bold tracking-wider uppercase text-white bg-black hover:bg-gray-800 transition-colors duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 delay-100 focus:outline-dashed focus:outline-yellow-400 focus:outline-offset-2">
          {button}
        </button>
      </div>
    </div>
  );

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 max-w-7xl mx-auto font-rubik">
      {cards.map((card, index) => (
        <Card
          key={index}
          {...card}
        />
      ))}
    </main>
  );
};

export default Prefooter;
