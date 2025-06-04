'use client';

import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


import CareerSec1 from './CareerSec1';
import CareerSec2 from './CareerSec2';
import CareerSec3 from './CareerSec3';


export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <CareerSec1 />
      <CareerSec2 />
      <CareerSec3 />
      <Footer />
    </main>
  );
}
