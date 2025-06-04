'use client';

import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


import VideoSec1 from './VideoSec1';
import VideoSec2 from './VideoSec2';

export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <VideoSec1 />
      <VideoSec2 />
      <Footer />
    </main>
  );
}
