'use client'
import { useEffect, useState } from 'react';

export default function Student() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowY: 'auto' }}>
      {/* Background Image */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '50vh',
          marginTop: '250px',
          backgroundImage: 'url("/AboutSchoolSection3.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.3,
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />

      {/* Cards Section */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '40px',
          paddingTop: '10vh',
          paddingBottom: '50px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Card title="HAPPY STUDENTS" value={10000} />
        <Card title="CBSE RESULT" value={100} suffix="%" />
        <Card title="QUALIFIED STAFF" value={1000} />
        <Card title="STUDENT AWARDS WON" value={2000} />
      </div>
    </div>
  );
}

function Card({ title, value, suffix = '' }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000; // total time in ms
    const stepTime = Math.max(Math.floor(duration / end), 30); // interval time

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div
      style={{
        background: 'linear-gradient(to bottom, #f34a64 50%, white 50%)',
        borderRadius: '20px 20px 50% 50%',
        width: 'clamp(160px, 30vw, 220px)', // ⬅ Reduced size
        height: 'clamp(160px, 30vw, 220px)', // ⬅ Reduced size
        textAlign: 'center',
        boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <h3
        style={{
          color: 'white',
          fontSize: 'clamp(14px, 2.5vw, 18px)',
          marginBottom: 'clamp(10px, 2vw, 20px)',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          color: 'orange',
          fontSize: 'clamp(22px, 3.5vw, 28px)',
          fontWeight: 'bold',
        }}
      >
        {count.toLocaleString()}{suffix}
      </p>
    </div>
  );
}
