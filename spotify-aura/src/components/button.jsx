import React from "react";

function Button(){
    const handleLogin = () => {
        // Redirect to your server's /login endpoint
        window.location.href = 'http://localhost:5173/login';
      };
    
      return (
        <div>
          <h1>Spotify Authorization</h1>
          <button onClick={handleLogin}>Log in with Spotify</button>
        </div>
      );
}

export default Button;