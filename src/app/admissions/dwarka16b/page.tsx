'use client';

import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import DwarkaBSec1 from './DwarkaBSec1'
import DwarkaBSec2 from './DwarkaBSec2'
import DwarkaBSec3 from './DwarkaBSec3'


export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <DwarkaBSec1 />
      <DwarkaBSec2 />
       <DwarkaBSec3 />
      <Footer />
    </main>
  );
}
