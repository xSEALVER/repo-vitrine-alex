import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import AboutComp from '../Components/AboutComp.jsx';
import MainHomeComponents from '../Components/MainHomeComponents.jsx';
import MainServicesComponents from '../Components/MainServicesComponents.jsx';
import ContactComp from '../Components/ContactComp.jsx';
import ServicesComp from '../Components/ServicesComp.jsx';
import Footer from '../Components/Footer';


function Home() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <AboutComp/>
        <MainHomeComponents/>
        <ServicesComp/> 
        <MainServicesComponents/>
        <ContactComp/>
        <Footer/>
    </>
  )
}

export default Home