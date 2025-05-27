'use client';

import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


import AwardSec1 from './AwardSec1';
import AwardSec2 from './AwardSec2';
import AwardSec3 from './AwardSec3';



export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <AwardSec1 />
      <AwardSec2 />
      <AwardSec3 />  
      <Footer />
    </main>
  );
}
