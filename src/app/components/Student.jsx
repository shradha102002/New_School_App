export default function Student() {
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflowY: 'auto',
      }}
    >
      {/* 🔷 Top content (no background color) */}
        {/* <div
        style={{
          content : "",
          position: 'absolute',
          top: 'calc(50px + 260px + 20px)', // updated height of cards + padding
          left: 0,
           width: '100%',
       
         // height: 'calc(100% - (50px + 260px + 20px))',
          backgroundImage: 'url("/pr2.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -1,
        }}
      > */}

   {/* <div
  style={{
   
      top: 0,
      left: 0,
      width: '100%',
      height: '50vh', 
      backgroundImage: 'url("/pr2.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      opacity: 0.3,
      zIndex: -1,
      pointerEvents: 'none', // prevents interaction blocking
  
  }}
>
   

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '40px',
          marginTop :"10%",
          padding: '50px 20px',
        }}
      >
        <Card title="HAPPY STUDENTS" value="10,000+" />
        <Card title="CBSE RESULT" value="100%" />
        <Card title="QUALIFIED STAFF" value="1000+" />
        <Card title="STUDENT AWARDS WON" value="2000+" />
      </div>


  
    </div> */}
       <div>
  <div
  style={{
    position: 'fixed', // ✅ makes it fixed
    top: 0,
    left: 0,
    width: '100%',
    height: '50vh',
    marginTop:"250px",
    backgroundImage: 'url("/pr2.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    opacity: 0.3,
    zIndex: -1,
    pointerEvents: 'none',
  }}
></div>

{/* Content scrolls on top */}
<div
  style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '40px',
    paddingTop: '10vh', // spacing from top
    paddingBottom: '50px',
    position: 'relative', // ensure stacking above bg
    zIndex: 1,
  }}
>
  <Card title="HAPPY STUDENTS" value="10,000+" />
  <Card title="CBSE RESULT" value="100%" />
  <Card title="QUALIFIED STAFF" value="1000+" />
  <Card title="STUDENT AWARDS WON" value="2000+" />
</div>

 </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div
      style={{
        background: 'linear-gradient(to bottom, #f34a64 50%, white 50%)',
        borderRadius: '20px 20px 50% 50%',
        width: 'clamp(180px, 35vw, 260px)', // ⬅️ Increased size
        height: 'clamp(180px, 35vw, 260px)',
        textAlign: 'center',
        boxShadow: '0 6px 20px rgba(0,0,0,0.2)', // more shadow
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <h3
        style={{
          color: 'white',
          fontSize: 'clamp(14px, 2.5vw, 20px)', // slightly larger text
          marginBottom: 'clamp(12px, 2.5vw, 24px)',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          color: 'orange',
          fontSize: 'clamp(24px, 4vw, 32px)', // larger number
          fontWeight: 'bold',
        }}
      >
        {value}
      </p>
    </div>
  );
}
