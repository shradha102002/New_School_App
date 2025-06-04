'use client';

import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


import ContactSec1 from './ContactSec1';
import ContactSec2 from './ContactSec2';


export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <ContactSec1 />
          <ContactSec2 />
      
     
      <Footer />
    </main>
  );
}
