import React from 'react';

const LandingPage = () => {
    const groups = ["Education", "Healthcare", "Fitness", "Wellness", "Personal Growth", "Mental Health", "Productivity", "Relationships", "Creativity", "Adventure"];
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-gray-100"
      style={{ overflow: 'hidden' }}
    >
      {/* First Ellipse */}
      <div
        style={{
          position: 'absolute',
          width: '240px',
          height: '240px',
          background: '#FF0D6A',
          filter: 'blur(75px)',
          borderRadius: '50%',
          top: 'calc(40% - 72px)', 
          left: 'calc(62% - 336px)', 
        }}
      ></div>

      {/* Second Ellipse */}
      <div
        style={{
          position: 'absolute',
          width: '240px',
          height: '240px',
          background: '#0500FF',
          filter: 'blur(75px)',
          borderRadius: '50%',
          top: 'calc(40% - 72px)', 
          left: 'calc(62% - 259px)', 
        }}
      ></div>

      {/* Third Ellipse */}
      <div
        style={{
          position: 'absolute',
          width: '240px',
          height: '240px',
          background: '#00FFE0',
          filter: 'blur(75px)',
          borderRadius: '50%',
          top: 'calc(40% - 72px)', 
          left: 'calc(62% - 182px)', 
        }}
      ></div>
        
    {/* Main text*/}
        <div
        style={{
          position: 'absolute',
          width: '387px',
          height: '30px',
          fontFamily: "'Font Awesome 5 Free', sans-serif",
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '40px',
          lineHeight: '46px',
          textTransform: 'lowercase',
          color: '#1E0E62',
          top: 'calc(50% - 100px)', 
          left: '50%',
          transform: 'translate(-50%, 0)', 
          textAlign: 'center',
        }}
      >
        empower your mind
      </div>

       {/* Input Box */}
      <input
        type="text"
        placeholder="Enter your goal"
        style={{
          boxSizing: 'border-box',
          position: 'absolute',
          width: '270px',
          height: '50px',
          border: '2px solid #EBEAED', 
          background: 'transparent', 
          borderRadius: '100px',
          fontFamily: "'DM Sans', sans-serif",
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: '18px',
          lineHeight: '26px',
          color: '#1E0E62',
          display: 'flex',
          alignItems: 'center',
          top: 'calc(50% - 10px)', 
          left: '50%',
          transform: 'translate(-50%, 0)', 
          padding: '0 24px',
        }}
      />

   {/* Group Text Bubbles */}
   <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '25px',
          position: 'absolute',
          top: 'calc(50% + 190px)', 
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '600px',
        }}
      >
        {groups.map((group, index) => (
          <div
            key={index}
            style={{
              position: 'relative',
              width: '142px',
              height: '50px',
              background: '#FFFFFF',
              border: '2px solid #EBEAED',
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontFamily: "'DM Sans', sans-serif",
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '14px',
              lineHeight: '26px',
              textAlign: 'center',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#1E0E62', transition: 'all 0.3s ease', 
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#1E0E62'; 
              e.target.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent'; 
              e.target.style.color = '#1E0E62'; 
            }}
          >
            {group}
          </div>
        ))}
      </div>
    </div>

    
  );
};

export default LandingPage;
