'use client'

import Image from 'next/image'

export default function AboutSchoolSection1() {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative w-full h-[600px]">
        <Image
          src="/aboutschool1.jpg"
          alt="Hero Image"
          fill
          className="object-cover brightness-110 contrast-105"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="w-full bg-[#f8486c] py-6 text-center px-4 flex flex-col items-center gap-4">
        <p className="text-base sm:text-lg md:text-xl font-semibold text-black">
          For admissions, connect with us at{' '}
          <span className="text-white font-extrabold">📞 +91 7304-071-071</span>
        </p>
      </div>
    </div>
  )
}
