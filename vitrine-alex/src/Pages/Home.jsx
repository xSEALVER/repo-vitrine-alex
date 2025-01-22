import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import MainHomeComponents from '../Components/MainHomeComponents.jsx';
// import MainAboutComponents from '../Components/MainAboutComponents.jsx';
import MainServicesComponents from '../Components/MainServicesComponents.jsx';
import ServicesComp from '../Components/ServicesComp.jsx';
// import Prefooter from '../Components/Prefooter';
import Footer from '../Components/Footer';

function Home() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <MainHomeComponents/>
        {/* <MainAboutComponents/> */}
        <ServicesComp/> 
        <MainServicesComponents/>
        {/* <Prefooter/> */}
        <Footer/>
    </>
  )
}

export default Home