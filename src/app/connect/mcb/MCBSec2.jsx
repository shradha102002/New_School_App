// components/Footer.tsx
import Image from "next/image";

const MCBSec2 = () => {
  return (
    <footer className="bg-[#f4f4f4] text-gray-700 text-sm pt-8 pb-4 px-4 lg:px-20 border-t-2 border-orange-500">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">

        {/* LEFT SECTION */}
        <div className="flex flex-col gap-4 max-w-xs">
          <div className="flex items-center gap-2">
            <Image src="/mcb_img/img1.jpg" alt="MCB Logo" width={100} height={100} />
            
          </div>
          <div className="flex items-center gap-2">
            <span>📧</span>
            <span>support@myclassboard.in</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📞</span>
            <span>(+91) 7353950600</span>
          </div>

        </div>

        {/* PRODUCTS */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 flex-1">
          <div>
            <h3 className="text-orange-500 font-semibold mb-2">PRODUCTS</h3>
            <ul className="space-y-1">
              <li>Gradebook</li>
              <li>Diary</li>
              <li>Fee Collections</li>
              <li>Admissions</li>
              <li>Transport</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-1 mt-8 lg:mt-6">
              <li>HR & PayRoll</li>
              <li>Library</li>
              <li>Student Information System</li>
              <li>IB Gradebook</li>
              <li>Cambridge Gradebook</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-1 mt-8 lg:mt-6">
              <li>Whatsapp</li>
              <li>SMS</li>
              <li>Voice Call</li>
              <li>Photo Gallery</li>
              <li>SQAA</li>
            </ul>
          </div>
        </div>

        {/* COMPANY */}
        <div className="mt-4 lg:mt-0">
          <h3 className="text-orange-500 font-semibold mb-2">COMPANY</h3>
          <ul className="space-y-1">
            <li>Why MCB?</li>
            <li>Core Team</li>
            <li>Blog</li>
            <li>Success Stories</li>
            <li>Careers</li>
            <li>Partners</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      
         

      {/* APP LINKS & ISO */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mt-10 border-t pt-6">

         <div className="flex gap-3 mt-4">
            <a href="#"><img src="/twitter.jpg" alt="Twitter" className="w-6 h-6" /></a>
            <a href="#"><img src="/facebook.png" alt="Facebook" className="w-6 h-6" /></a>
            <a href="#"><img src="/linkedin.jpg" alt="LinkedIn" className="w-6 h-6" /></a>
            <a href="#"><img src="/instagram.png" alt="Instagram" className="w-6 h-6" /></a>
          </div>
        <div className="flex gap-6">
          <div className="bg-white p-4 rounded shadow text-center">
            <p className="text-red-600 font-semibold mb-2">Student / Parent App</p>
            <div className="flex gap-2">
              <img src="/gpay.jpg" alt="Google Play" className="h-8" />
              <img src="/appstore.jpg" alt="App Store" className="h-8" />
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <p className="text-orange-600 font-semibold mb-2">Teacher App</p>
            <div className="flex gap-2">
              <img src="/gpay.jpg" alt="Google Play" className="h-8" />
              <img src="/appstore.jpg" alt="App Store" className="h-8" />
            </div>
          </div>
        </div>

        <div className="mt-4 lg:mt-0">
          <img src="/iso.jpg" alt="ISO Certified" className="h-12" />
        </div>

        
      </div>

      {/* BOTTOM FOOTER */}
      <div className="text-center text-xs text-gray-600 mt-6 border-t pt-4">
        <p>© MyClassboard 2024. All rights reserved</p>
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          <a href="#" className="hover:underline">Privacy Policy</a> |
          <a href="#" className="hover:underline">Terms & Conditions</a> |
          <a href="#" className="hover:underline">Data Privacy Commitment</a> |
          <a href="#" className="hover:underline">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default MCBSec2;
