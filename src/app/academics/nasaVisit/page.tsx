'use client';

import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import VisitSec1 from './VisitSec1';

import VisitSec2 from './VisitSec2';
import VisitSec3 from './VisitSec3';
import VisitSec4 from './VisitSec4';
import VisitSec5 from './VisitSec5';

export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <VisitSec1 />
      <VisitSec2 />
       <VisitSec3 />
       <VisitSec4 />
         <VisitSec5 />
      
      <Footer />
    </main>
  );
}
