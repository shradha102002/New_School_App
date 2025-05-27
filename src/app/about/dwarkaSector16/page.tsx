'use client';

import { useEffect } from 'react';

export default function DwarkaSector() {
  useEffect(() => {
    // Client-side redirect to YouTube
    window.location.href = 'https://youtu.be/4PQSeKKZUFU?si=vOdnPJRXYIFqK0Oc';
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 'clamp(16px, 3vw, 24px)',
        fontWeight: 'bold',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      Redirecting to YouTube video...
    </div>
  );
}
