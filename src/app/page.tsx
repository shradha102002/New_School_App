'use client';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SchoolPhilosophy from './components/SchoolPhilosophy';
import Student from './components/Student';
import Toppersection from './components/Toppersection';
import OurSchools from './components/OurSchools';
import EventsSection from './components/EventsSection'
import ActivitiesSlider from './components/ActivitiesSlider'
import HouseValues from './components/HouseValues'
import ImportantDays from './components/ImportantDays'
import VideoGallery from './components/VideoGallery'
import Reviews from './components/Reviews';
import Questions from './components/Questions'
import Footer from './components/Footer'




export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <About />
      <SchoolPhilosophy />
      <Student />
      <Toppersection />
      <EventsSection/>
      <ActivitiesSlider/>
      <HouseValues/>
      <ImportantDays/>
      <VideoGallery/>
      <Reviews/>
      <Questions/>
      <Footer/>

      
    </>
  );
}
