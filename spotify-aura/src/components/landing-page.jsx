import React from "react";
import SpotifyAura from "./spotify-aura";
import DynamicGradient from "./gradient";
import Button from "./button";

const genres = new Map([

    ["Indie", "#81b14f"],
    ["Rock",  "#c4bd8b"]
  
  ])

function LandingPage () {
    
    return (
        <>
            {/* <img 
            className='.img-1738'
            src="src/assets/img-17381.png" 
            /> */}
            <div className="landing-page">
                <DynamicGradient 
                    color1={genres.get("Rock")}
                    color2={genres.get("Indie")}
                    />
                <Button />
            </div>
        </>
    )

}

export default LandingPage;