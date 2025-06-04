'use client';

import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


import NCHMSec1 from './NCHMSec1';
import NCHMSec2 from './NCHMSec2';
import NCHMSec3 from './NCHMSec3';
import NCHMSec4 from './NCHMSec4';


export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <NCHMSec1 />
      <NCHMSec2 />
       <NCHMSec3 />
       <NCHMSec4 />
        
      <Footer />
    </main>
  );
}
