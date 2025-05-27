'use client';

import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


import DignitarySec1 from './DignitarySec1';

import DignitarySec2 from './DignitarySec2';
import DignitarySec3 from './DignitarySec3';

export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <DignitarySec1 />
       <DignitarySec2 />
        <DignitarySec3 />
       
     
      <Footer />
    </main>
  );
}
