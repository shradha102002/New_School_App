'use client';

import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


import NEETSec1 from './NEETSec1';
import NEETSec2 from './NEETSec2';
import NEETSec3 from './NEETSec3';
import NEETSec4 from './NEETSec4';


export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <NEETSec1 />
       <NEETSec2 />
        <NEETSec3 />
         <NEETSec4 />
      
       
      <Footer />
    </main>
  );
}
