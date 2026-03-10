// src/pages/PrecisionGrip.jsx
import { useState } from 'react';

export default function PrecisionGrip() {
  const [thumb, setThumb] = useState(50);
  const [f1, setF1] = useState(50);
  const [f2, setF2] = useState(50);
  const [f3, setF3] = useState(50);

  const send = async () => {
    if (!controlChar) {
      alert('Connect in Settings first!');
      return;
    }

    try {
      const value = `${thumb},${f1},${f2},${f3}`;
      const encoder = new TextEncoder();
      await controlChar.writeValue(encoder.encode(value));
      alert(`Sent: ${value}`);
    } catch (err) {
      alert('Send failed: ' + err.message);
    }
  };

  return (
    <div style={{ padding: '80px 20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '3.5rem', textAlign: 'center' }}>Precision Grip</h1>

      <div style={{ margin: '40px 0' }}>
        <label style={{ display: 'block', fontSize: '1.6rem', marginBottom: '10px' }}>
          Thumb: {thumb}
        </label>
        <input type="range" min="0" max="100" value={thumb} onChange={e => setThumb(+e.target.value)} style={{ width: '100%' }} />
      </div>

      {/* Repeat for f1, f2, f3 — same as above, change label and state */}

      <button onClick={send} style={{
        background: '#d33c32',
        color: 'white',
        fontSize: '2rem',
        padding: '1.2rem 4rem',
        borderRadius: '999px',
        border: 'none',
        cursor: 'pointer',
        display: 'block',
        margin: '60px auto'
      }}>
        Send to ESP32
      </button>
    </div>
  );
}