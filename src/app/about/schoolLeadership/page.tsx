'use client';

import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import SchoolLeadershipSection1 from './SchoolLeadershipSection1';
import SchoolLeadershipSection2 from './SchoolLeadershipSection2';
import SchoolLeadershipSection3 from './SchoolLeadershipSection3';
import Footer from '../../components/Footer'


export default function HomePage() {
  return (
    <main>
        <Header />
         <Navbar />
      <SchoolLeadershipSection1 />
      <SchoolLeadershipSection2 />
      <SchoolLeadershipSection3 />
      <Footer/>
    </main>
  );
}
