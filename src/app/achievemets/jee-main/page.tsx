'use client';

import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


import JEESec1 from './JEESec1';
import JEESec2 from './JEESec2';
import JEESec3 from './JEESec3';
import JEESec4 from './JEESec4';

export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <JEESec1 />
       <JEESec2 />
        <JEESec3 />
         <JEESec4 />
       
       
      <Footer />
    </main>
  );
}
