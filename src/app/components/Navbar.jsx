'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'

const menuItems = [
  {
    label: 'About',
    items: [
      { label: 'About School', href: '/about/aboutschool' },
      { label: 'About Chairman', href: '/about/aboutchairman' },
      { label: 'Our School Leadership', href: '/about/schoolLeadership'},
      { label: 'Values & Attributes', href: '/about/values&attributes'},
      { label: 'Vision & Mission', href: '/about/vision&mission' },
      { label: 'Dwarka Sector 16B', href: '/about/dwarkaSector16' },
      { label: 'Dwarka Sector 22', href: '/about/dwarkaSector22' },
      { label: 'Ashok Vihar', href: '/about/ashokVihar' },
    ],
  },
  {
    label: 'Academics',
    items: [
      { label: 'Scholastic', href: '/academics/scholastic' },
      { label: 'co-Scholastic | Houses', href: '/academics/scholasticHouses' },
      { label: 'co-Scholastic | Activities', href: '/academics/scholasticActivities' },
      { label: 'co-Scholastic | Trips & Excursions', href: '/academics/scholasticTrips' },
      { label: 'Social Initiatives', href: '/academics/schoolinitiative' },
      { label: 'Global Dimension | NASA Visit', href: '/academics/nasaVisit' },
    ],
  },
  {
    label: 'Achievements',
    items: [
      { label: 'Awards & Accolades', href: '/achievemets/awards' },
      { label: 'Faculty Awards', href: '/achievemets/faculty' },
      { label: 'Sports Achievements', href: '/achievemets/sports' },
      { label: 'NEET Qualifiers', href: '/achievemets/neet' },
      { label: 'JEE Main Qualifiers', href: '/achievemets/jee-main' },
      { label: 'JEE (Advanced) Rank Holders', href: '/achievemets/jee-advanced' },
      { label: 'NCHM JEE RANK Holders', href: '/achievemets/nchm' },
    ],
  },
  {
    label: 'Showcase',
    items: [
      { label: 'News and Updates', href: '/showcase/News' },
      { label: 'Prudence In Media', href: '/showcase/media' },
      { label: 'Visit To Dignitary', href: '/showcase/dignitary' },
      { label: 'Video Gallery', href: '/showcase/videoGallery' },
      { label: 'Parent Testimonials', href: '/showcase/testimonials' },
    ],
  },
  {
    label: 'Admissions',
    items: [
      { label: 'Prudence Brochure', href: '/admissions/brochure' },
      { label: 'Admission Criteria | Ashok Vihar', href: '/admissions/ashokVihar' },
      { label: 'Admission Criteria | Dwarka Sec 22', href: '/admissions/dwarka22' },
      { label: 'Admission Criteria | Dwarka 16B', href: '/admissions/dwarka16b' },
      { label: 'Apply Now', href: '/admissions/apply' },
    ],
  },
  {
    label: 'Connect',
    items: [
      { label: 'Prudence Portal', href: '/connect/portal' },
      { label: 'Prudence MCB Portal', href: '/connect/mcb' },
      { label: 'Careers', href: '/connect/careers' },
      { label: 'Locate Us', href: '/connect/locate' },
      { label: 'Contact Us', href: '/connect/contact' },
    ],
  },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(null)
  const dropdownRef = useRef(null)
  const router = useRouter()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index)
  }

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 py-4 flex items-center justify-between" style={{ paddingLeft: "50px", paddingRight: "25px" }}>
        <Link href="/">
          <img src="/logo.jpg" alt="Prudence Logo" className="h-14 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6" ref={dropdownRef}>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="text-[#e42529] font-semibold">Home</Link>
            {menuItems.map((menu, index) => (
              <div key={index} className="relative">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="hover:text-[#e42529] dark:text-white"
                >
                  {menu.label} ▾
                </button>
                {dropdownOpen === index && (
                  <div className="absolute bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg mt-2 p-2 space-y-2 z-50 min-w-[300px]">
                    {menu.items.map((item, idx) => (
                      <Link key={idx} href={item.href} className="block hover:text-[#e42529]">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <Link
            href="/register"
            className="bg-[#ff4c6e] text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-[#e42529] transition"
          >
            Register Now
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden text-3xl text-black dark:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 px-4 py-6 space-y-4 shadow-md text-black dark:text-white" ref={dropdownRef}>
          <Link href="/" className="block text-[#e42529] font-semibold">Home</Link>
          {menuItems.map((menu, index) => (
            <div key={index}>
              <button
                className="w-full text-left font-medium"
                onClick={() => toggleDropdown(index)}
              >
                {menu.label} ▾
              </button>
              {dropdownOpen === index && (
                <div className="pl-4 mt-1 space-y-2">
                  {menu.items.map((item, idx) => (
                    <Link key={idx} href={item.href} className="block hover:text-[#e42529]">
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/cbse" className="block hover:text-[#e42529]">CBSE Results</Link>
          <Link
            href="/register"
            className="block w-full bg-[#ff4c6e] text-white px-5 py-2 rounded-full font-semibold text-sm text-center hover:bg-[#e42529] transition"
          >
            Register Now
          </Link>
        </div>
      )}
    </header>
  )
}
