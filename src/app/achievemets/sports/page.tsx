'use client';

import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


import SportsSec1 from './SportsSec1';
import SportsSec2 from './SportsSec2';
import SportsSec3 from './SportsSec3';



export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <SportsSec1 />
       <SportsSec2 />
       <SportsSec3 />
       
      <Footer />
    </main>
  );
}
