'use client';

import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import ScholasticSec1 from './ScholasticSec1'; 
import ScholasticSec2 from './ScholasticSec2'; 
import ScholasticSec3 from './ScholasticSec3'; 

import Footer from '../../components/Footer'

export default function ScholasticPage() {
  return (
    <main>
      <Header />
      <Navbar />
      <ScholasticSec1 />
       <ScholasticSec2 />
        <ScholasticSec3 />
      <Footer />
    </main>
  );
 }
