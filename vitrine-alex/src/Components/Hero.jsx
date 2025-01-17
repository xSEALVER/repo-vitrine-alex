import React from 'react';
import imageAcc from '../assets/car-accueil.jpg';

const Hero = () => {
    return (
        <div className="relative w-full">
            {/* Background Image */}
            <img className="w-full h-screen object-cover" src={imageAcc} alt="Accueil" />

            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 w-" >L'avenir de la mobilité est là</h1>
                <p className="text-white text-lg mb-6">Avec Aude Mobilté, trouvez des solutions de transport adaptés à vos besoins.</p>
                
            </div>
        </div>
    );
};

export default Hero;
