'use client';

import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import DwarkaSec1 from './DwarkaSec1';
import DwarkaSec2 from './DwarkaSec2';
import DwarkaSec3 from './DwarkaSec3';


export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <DwarkaSec1 />
      <DwarkaSec2 />
      <DwarkaSec3 />
      <Footer />
    </main>
  );
}
