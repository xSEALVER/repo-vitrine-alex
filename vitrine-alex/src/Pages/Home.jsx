import React from 'react';
import Navbar from '../Components/Navbar';
import HeroComp from '../Components/HeroComp.jsx';
import AboutComp from '../Components/AboutComp.jsx';
import ObjectifComp from '../Components/ObjectifComp.jsx';
import ServicesComp from '../Components/ServicesComp.jsx';
import ContactComp from '../Components/ContactComp.jsx';
import EngagementComp from '../Components/EngagementComp.jsx';
import Footer from '../Components/Footer';


function Home() {
  return (
    <>
        <Navbar/>
        <HeroComp/>
        <AboutComp/>
        <ObjectifComp/>
        <EngagementComp/> 
        <ServicesComp/>
        <ContactComp/>
        <Footer/>
    </>
  )
}

export default Home