import React from "react";

function Button(){
    const handleLogin = () => {
        // Redirect to your server's /login endpoint
        window.location.href = 'http://localhost:5173/login';
      };
    
      return (
        <div>
          <button className='connect-spotify' onClick={handleLogin}>Connect Spotify</button>
        </div>
      );
}

export default Button;