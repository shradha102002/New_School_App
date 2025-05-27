'use client';

import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import ValueSection1 from "./ValuesSection1";
import ValueSection2 from "./ValuesSection2";
import ValueSection3 from "./ValuesSection3";

import Footer from '../../components/Footer'

export default function Home() {
  return (
    <main>
        <Header/>
        <Navbar/>
      <ValueSection1 />
      <ValueSection2/>
       <ValueSection3/>
     
       <Footer/>
    </main>
  );
}
