import { useState } from 'react'
import './App.css'
import Button from './components/button'
import AuraPage from './components/AuraPage'
import Dashboard from './components/Dashboard';
import Callback from './components/Callback';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/api/callback" element={<Callback />}/>
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

function Home() {

  return (
    <div className='landing-page'>
      <img
        className='img-17381'
        src="src/assets/img-17381.png"
        alt="Background Star Image"
      />
      <header>
        <h1 className='spotify-aura'>Spotify Aura</h1>
        <h2 className='whats-your-aura'>What's your aura?</h2>
      </header>
      <main>
        <Button />
        {/* <button className='create-song-list'>Create Song List</button> */}
      </main>
    </div>
  )
}

export default App