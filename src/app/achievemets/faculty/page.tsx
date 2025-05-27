'use client';

import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


import FacultySec1 from './FacultySec1';

import FacultySec2 from './FacultySec2';
import FacultySec3 from './FacultySec3';




export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <FacultySec1 />
      <FacultySec2 />
      <FacultySec3 />
      <Footer />
    </main>
  );
}
