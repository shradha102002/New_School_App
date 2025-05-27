'use client';

import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import HousesSection1 from './HousesSection1';
import HousesSection2 from './HousesSection2'; 
import HousesSection4 from './HousesSection4'; 

import HousesSection3 from './HousesSection3'; 
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <HousesSection1 />
      <HousesSection2 />
        <HousesSection4 />
       <HousesSection3 />
      <Footer />
    </main>
  );
}
