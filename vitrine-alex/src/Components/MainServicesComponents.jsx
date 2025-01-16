import React from 'react'
import imageServices from '../assets/services-acc.jpg';


const MainServicesComponents = () => {
  return (
    <>
        <>
            <div className="relative w-full">
                <img className="w-full h-screen object-cover" src={imageServices} alt="img-accueil" />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                    <h1 className='text-white text-3xl px-5 border-4 hover:border-dashed cursor-pointer -skew-x-12 uppercase '>Services</h1>
                </div>
            </div>
        </>
    </>
  )
}

export default MainServicesComponents