'use client';

import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import AboutChairmanSection1 from './AboutChairmanSection1'; 
import AboutChairmanSection2 from './AboutChairmanSection2'; 
import AboutChairmanSection3 from './AboutChairmanSection3'; 
import Footer from '../../components/Footer'

export default function AboutPage() {
  return (
    <main>
      <Header />
      <Navbar />
      <AboutChairmanSection1 />
       <AboutChairmanSection2 />
        <AboutChairmanSection3 />
        <Footer/>
      {/* other sections can go here */}
    </main>
  );
}
