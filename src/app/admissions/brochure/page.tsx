'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const PrudenceBrochure = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the PDF file directly
    router.push('/Broucher.pdf');
  }, [router]);

  return null; // No UI needed since it immediately redirects
};

export default PrudenceBrochure;
