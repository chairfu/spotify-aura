import React, { useState } from 'react';


function DynamicGradient({color2}) {
    
    return (
        <>
            <div className="landing-page" 
             style={{background: `radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, ${color2} 100%)`}}
            >
            </div>
        </>
  );
}

export default DynamicGradient;