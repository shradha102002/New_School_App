'use client';

import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import TripSection1 from './TripSection1';
import TripSection2 from './TripSection2';
import TripSection3 from './TripSection3';

export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <TripSection1 />
      <TripSection2 />
      <TripSection3 />
      <Footer />
    </main>
  );
}
