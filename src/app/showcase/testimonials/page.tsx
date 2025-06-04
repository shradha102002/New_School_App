'use client';

import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


import TestimonialSec1 from './TestimonialSec1';
import TestimonialSec2 from './TestimonialSec2';


export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <TestimonialSec1 />
      <TestimonialSec2 />
     
      <Footer />
    </main>
  );
}
