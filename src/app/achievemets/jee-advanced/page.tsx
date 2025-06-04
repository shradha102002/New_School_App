'use client';

import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


import JEEAdvSec1 from './JEEAdvSec1';
import JEEAdvSec2 from './JEEAdvSec2';

import JEEAdvSec3 from './JEEAdvSec3';
import JEEAdvSec4 from './JEEAdvSec4';


export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <JEEAdvSec1 />
      <JEEAdvSec2 />
      <JEEAdvSec3 /> 
        <JEEAdvSec4 />  
      <Footer />
    </main>
  );
}
