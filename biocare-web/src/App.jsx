// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Settings from './pages/Settings'
import PrecisionGrip from './pages/PrecisionGrip'
import LiveData from './pages/LiveData'
import Presets from './pages/Presets'
import CustomGestures from './pages/CustomGestures'
import './index.css'

export default function App() {
  return (
    <div style={{ background: '#111', color: '#ffffff', minHeight: '100vh' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/precision-grip" element={<PrecisionGrip />} />
        <Route path="/live-data" element={<LiveData />} />
        <Route path ="/custom-gestures" element={<CustomGestures />} />
        <Route path="/presets" element={<Presets />} />
        <Route path="*" element={<div style={{ padding: '100px', textAlign: 'center' }}>
        
          <h1>404 - Page Not Found</h1>
          <p>Go back to <a href="/" style={{ color: '#d33c32' }}>Home</a></p>
        </div>} />
      </Routes>
    </div>
  )
}