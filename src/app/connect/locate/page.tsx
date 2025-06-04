'use client';

import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


import LocateSec1 from './LocateSec1';
import LocateSec2 from './LocateSec2';
import LocateSec3 from './LocateSec3';


export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <LocateSec1 />
      <LocateSec2 />
       <LocateSec3 />
     
      <Footer />
    </main>
  );
}
