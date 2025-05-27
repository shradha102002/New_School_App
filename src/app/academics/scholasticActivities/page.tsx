'use client';

import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import ActivitesSection1 from './ActivitiesSection1';
import ActivitesSection2 from './ActivitiesSection2';
import ActivitesSection4 from './ActivitiesSection4';
import ActivitesSection3 from './ActivitiesSection3';
 
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <ActivitesSection1/>
      <ActivitesSection2/>
      <ActivitesSection4/>
      <ActivitesSection3/>
      <Footer />
    </main>
  );
}
