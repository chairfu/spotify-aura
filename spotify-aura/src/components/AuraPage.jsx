import React from 'react';
import './AuraPage.css';

function AuraPage() {
    return (
        <div className="aura-page">
          <div className="ViewNowAura">
            <img 
              className="Img17381" 
              src="https://via.placeholder.com/241x191" 
              alt="Example Image"
            />
            <div className="SpotifyAura">Spotify Aura</div>
            <div className="Genre1">Indie</div>
            <div className="Genre2">Alternative</div>
            <div className="TopSong">Top Song</div>
            <div className="SongData">
              <div className="SongName">No One Noticed</div>
              <div className="Artist">The Marías</div>
              <div className="AlbumName">Submarine</div>
              <div className="Duration">3:57</div>
              <div className="Year">2024</div>
              <img 
                className="Rectangle2" 
                src="https://via.placeholder.com/122x122" 
                alt="Example Thumbnail"
              />
            </div>
          </div>
        </div>
      );
}

export default AuraPage;