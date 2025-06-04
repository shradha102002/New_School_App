"use client";

import React from "react";
import Link from "next/link";

const ApplySec4 = () => {
  return (
    <footer className="w-full mt-16 bg-white border-t border-gray-200">
      {/* Top Blue Bar */}
      <div className="w-full h-3 bg-blue-900"></div>

      {/* Main Footer Content */}
      <div className="text-center text-sm text-gray-800 py-6 px-4">
        <p>
          Copyrights © <span className="font-medium">Prudence School</span>, All Rights Reserved. ||
          Website maintained by{" "}
          <Link href="https://www.schoolerpsoftware.in" target="_blank" className="text-blue-600 hover:underline">
            School ERP Software
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default ApplySec4;
