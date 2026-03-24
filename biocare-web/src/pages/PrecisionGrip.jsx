// src/pages/PrecisionGrip.jsx
import { useState } from 'react';

export default function PrecisionGrip() {
  const [thumb, setThumb] = useState(50);
  const [index, setIndex] = useState(50);
  const [middle, setMiddle] = useState(50);
  const [ring, setRing] = useState(50);
  const [pinky, setPinky] = useState(50);

  const sendToESP32 = async () => {
    if (!globalControlChar) {
      alert('Please go to Settings and connect to ESP32 first!');
      return;
    }

    try {
      const command = `${thumb},${index},${middle},${ring},${pinky}`;
      const encoder = new TextEncoder();
      await globalControlChar.writeValue(encoder.encode(command));
      
      alert(`✅ Sent to ESP32: ${command}`);
    } catch (err) {
      alert('Send failed: ' + err.message);
    }
  };

  return (
    <div style={{ 
      padding: '80px 20px', 
      maxWidth: '700px', 
      margin: '0 auto', 
      background: '#111', 
      color: '#fff',
      minHeight: '100vh'
    }}>
      <h1 style={{ 
        fontSize: '3.5rem', 
        textAlign: 'center', 
        marginBottom: '60px' 
      }}>
        Precision Grip
      </h1>

      {/* Thumb */}
      <div style={{ margin: '40px 0' }}>
        <label style={{ display: 'block', fontSize: '1.6rem', marginBottom: '10px' }}>
          Thumb: {thumb}
        </label>
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={thumb} 
          onChange={e => setThumb(+e.target.value)} 
          style={{ width: '100%' }} 
        />
      </div>

      {/* Index Finger */}
      <div style={{ margin: '40px 0' }}>
        <label style={{ display: 'block', fontSize: '1.6rem', marginBottom: '10px' }}>
          Index: {index}
        </label>
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={index} 
          onChange={e => setIndex(+e.target.value)} 
          style={{ width: '100%' }} 
        />
      </div>

      {/* Middle Finger */}
      <div style={{ margin: '40px 0' }}>
        <label style={{ display: 'block', fontSize: '1.6rem', marginBottom: '10px' }}>
          Middle: {middle}
        </label>
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={middle} 
          onChange={e => setMiddle(+e.target.value)} 
          style={{ width: '100%' }} 
        />
      </div>

      {/* Ring Finger */}
      <div style={{ margin: '40px 0' }}>
        <label style={{ display: 'block', fontSize: '1.6rem', marginBottom: '10px' }}>
          Ring: {ring}
        </label>
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={ring} 
          onChange={e => setRing(+e.target.value)} 
          style={{ width: '100%' }} 
        />
      </div>

      {/* Pinky Finger */}
      <div style={{ margin: '40px 0' }}>
        <label style={{ display: 'block', fontSize: '1.6rem', marginBottom: '10px' }}>
          Pinky: {pinky}
        </label>
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={pinky} 
          onChange={e => setPinky(+e.target.value)} 
          style={{ width: '100%' }} 
        />
      </div>

      <button 
        onClick={sendToESP32} 
        style={{
          background: '#d33c32',
          color: 'white',
          fontSize: '2rem',
          padding: '20px 80px',
          borderRadius: '999px',
          border: 'none',
          cursor: 'pointer',
          display: 'block',
          margin: '60px auto',
          width: '320px'
        }}
      >
        Send Gesture to ESP32
      </button>
    </div>
  );
}