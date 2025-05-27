'use client';

import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import ViharSec1 from './ViharSec1';
import ViharSec2 from './ViharSec2';
import ViharSec3 from './ViharSec3';




export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <ViharSec1 />
      <ViharSec2 />
      <ViharSec3 />
      <Footer />
    </main>
  );
}
