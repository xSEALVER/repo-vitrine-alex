import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import MainHomeComponents from '../Components/MainHomeComponents.jsx';
import Prefooter from '../Components/Prefooter';
import Footer from '../Components/Footer';

function Home() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <MainHomeComponents/>
        <Prefooter/>
        <Footer/>
    </>
  )
}

export default Home