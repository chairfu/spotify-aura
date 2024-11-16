import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='landing-page'>
      <img
        className='background-image'
        src="src/assets/img-17381.png"
        alt="Background"
      />
      <header>
        <h1 className='spotify-aura'>Spotify Aura</h1>
        <h2 className='whats-your-aura'>What's your aura?</h2>
      </header>
      <main>
        <button className='connect-spotify'>Connect Spotify</button>
        <button className='create-song-list'>Create Song List</button>
      </main>
    </div>
  )
}

export default App