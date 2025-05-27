'use client';

import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import VisionSection1 from './VisionSection1';
import VisionSection2 from './VisionSection2';
import VisionSection3 from './VisionSection3';

import Footer from '../../components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <VisionSection1 />
      <VisionSection2 />
          <VisionSection3 />
     
      <Footer />
    </main>
  );
}
