import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import AboutComp from '../Components/AboutComp.jsx';
// import DiscoverSection from '../Components/HistoireComp.jsx';
// import VehicleCareSection from '../Components/VehicleComp.jsx';
// import HistorySection from '../Components/StorySection.jsx';
import MainHomeComponents from '../Components/MainHomeComponents.jsx';
// import MainAboutComponents from '../Components/MainAboutComponents.jsx';
import MainServicesComponents from '../Components/MainServicesComponents.jsx';
import ContactComp from '../Components/ContactComp.jsx';
import ServicesComp from '../Components/ServicesComp.jsx';
// import Prefooter from '../Components/Prefooter';
import Footer from '../Components/Footer';


function Home() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <AboutComp/>
        {/* <VehicleCareSection/>
        <HistorySection/> */}
        
        {/* <DiscoverSection/> */}
        <MainHomeComponents/>
        {/* <MainAboutComponents/> */}
        <ServicesComp/> 
        <MainServicesComponents/>
        <ContactComp/>
        {/* <Prefooter/> */}
        <Footer/>

    </>
  )
}

export default Home