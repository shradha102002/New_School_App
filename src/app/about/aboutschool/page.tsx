'use client'

import React from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import AboutSchoolSection1 from './AboutSchoolSection1'
import AboutSchoolSection2 from './AboutSchoolSection2'
import AboutSchoolSection3 from './AboutSchoolSection3'
import AboutSchoolSection4 from './AboutSchoolSection4'
import Footer from '../../components/Footer'

export default function AboutSchoolPage() {
  return (
    <>
      <Header />
      <Navbar />
      <AboutSchoolSection1 />
      <AboutSchoolSection2 />
      <AboutSchoolSection3 />
      <AboutSchoolSection4 />
      <Footer/>
    </>
  )
}
