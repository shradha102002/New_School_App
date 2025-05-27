'use client';

import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


import NewsSec1 from './NewsSec1';
import NewsSec2 from './NewsSec2';
import NewsSec3 from './NewsSec3';

export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <NewsSec1 />
       <NewsSec2 />
        <NewsSec3 />
     
      <Footer />
    </main>
  );
}
