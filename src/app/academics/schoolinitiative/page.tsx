'use client';

import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import InitiativeSec1 from './InitiativeSec1';
import InitiativeSec2 from './InitiativeSec2';
import InitiativeSec3 from './InitiativeSec3';
import IntiativeSec4 from './InitiativeSec4';




import Footer from '../../components/Footer';
import InitiativeSec4 from './InitiativeSec4';

export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <InitiativeSec1 />
      <InitiativeSec2 />
      <InitiativeSec3 />
      <InitiativeSec4/>
      
      
     
      
      <Footer />
    </main>
  );
}
