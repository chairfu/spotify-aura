import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{width: 1920, height: 1080, position: 'relative', background: 'radial-gradient(100.00% 100.00% at Infinity% NaN%, white 0%, #ADB2F0 100%)'}}>
      <img 
        style={{
          width: '1149px',
          height: '764px',
          left: '15px',
          top: '113px',
          position: 'absolute'
        }} 
        src="src/assets/img-17381.png" 
      />
      <div style={{width: 971, height: 143, left: 695, top: 553, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 150, fontFamily: 'Brown Sugar', fontWeight: '400', wordWrap: 'break-word'}}>Spotify Aura</div>
      <div style={{width: 888, height: 217, left: 1017, top: 386, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 50, fontFamily: 'Antic Didone', fontWeight: '400', wordWrap: 'break-word'}}>What’s your aura?</div>
      <div style={{width: 401.64, height: 144, left: 759, top: 733, position: 'absolute', background: '#1DB954', borderRadius: 100.63}}></div>
      <div style={{width: 401.64, height: 144, left: 1260, top: 733, position: 'absolute', background: '#EAEDFF', borderRadius: 100.63}}></div>
      <div style={{width: 328, height: 117.60, left: 796, top: 746, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 35.42, fontFamily: 'Montserrat', fontWeight: '500', wordWrap: 'break-word'}}>Connect Spotify</div>
      <div style={{width: 328, height: 117.60, left: 1297, top: 746, position: 'absolute', textAlign: 'center', color: '#ADB2F0', fontSize: 35.42, fontFamily: 'Montserrat', fontWeight: '500', wordWrap: 'break-word'}}>Create Song List</div>
      </div>
    </>
  )
}

export default App
