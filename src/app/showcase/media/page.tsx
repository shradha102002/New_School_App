'use client';

import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


import MediaSec1 from './MediaSec1';

import MediaSec2 from './MediaSec2';
import MediaSec3 from './MediaSec3';

export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <MediaSec1 />
      <MediaSec2 />
      <MediaSec3 />
       
     
      <Footer />
    </main>
  );
}
