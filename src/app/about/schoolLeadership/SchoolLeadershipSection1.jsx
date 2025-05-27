'use client';
import Image from 'next/image';
import { Phone } from 'lucide-react'; // optional: lucide icons

export default function AdmissionSection() {
  return (
    <div className="relative w-full">
      {/* Image Section */}
      <div className="w-full">
        <Image
          src="/schoolLeadership/leadership1.jpg" // ← replace with your actual path
          alt="Students in classroom"
          width={1920}
          height={800}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-[#FF3E6C] text-white text-center px-4 py-3 text-sm sm:text-base md:text-lg">
        For admissions, <span className="font-medium">connect with us</span>
        <span className="inline-flex items-center ml-2 font-semibold">
          <Phone className="w-4 h-4 mr-1" /> +91 7304-071-071
        </span>
      </div>
    </div>
  );
}
