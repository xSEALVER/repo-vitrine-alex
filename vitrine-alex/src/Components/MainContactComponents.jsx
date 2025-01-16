import React from 'react'
import imageContact from '../assets/contact-acc.jpg';


const MainContactComponents = () => {
  return (
    <>
        <>
            <div className="relative w-full">
                <img className="w-full h-screen object-cover" src={imageContact} alt="img-accueil" />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                    <h1 className='text-white text-3xl px-5 border-4 hover:border-dashed cursor-pointer -skew-x-12 uppercase'>Contact</h1>
                </div>
            </div>
        </>
    </>
  )
}

export default MainContactComponents