// src/pages/Settings.jsx
import { useState } from 'react';

let device = null;
let server = null;
let service = null;
let controlChar = null;

export default function Settings() {
  const [status, setStatus] = useState('Disconnected');
  const [error, setError] = useState('');

  const connect = async () => {
    setError('');
    setStatus('Scanning...');

    try {
      // Request Bluetooth device with your ESP32 name prefix
      device = await navigator.bluetooth.requestDevice({
        filters: [{ namePrefix: 'BioCare' }], // matches "BioCare_ProstheticESP32"
        optionalServices: ['b36ffaec-2ef4-4f92-8240-05877b9d71e6'] // your service UUID
      });

      setStatus('Connecting to GATT server...');
      server = await device.gatt.connect();

      setStatus('Getting service...');
      service = await server.getPrimaryService('b36ffaec-2ef4-4f92-8240-05877b9d71e6');

      setStatus('Getting control characteristic...');
      controlChar = await service.getCharacteristic('36e89808-bb82-471d-9791-a2dc10994675');

      setStatus('Connected! Ready to send commands.');
    } catch (err) {
      setError('Failed: ' + err.message);
      setStatus('Disconnected');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '80px 20px' }}>
      <h1 style={{ fontSize: '3.5rem' }}>Settings</h1>
      <button 
        onClick={connect} 
        disabled={status.includes('Connecting') || status === 'Connected!'}
        style={{
          background: status === 'Connected!' ? '#4CAF50' : '#d33c32',
          color: 'white',
          fontSize: '2rem',
          padding: '1.2rem 4rem',
          borderRadius: '999px',
          border: 'none',
          cursor: status.includes('Connecting') ? 'not-allowed' : 'pointer',
          opacity: status.includes('Connecting') ? 0.6 : 1
        }}
      >
        {status.includes('Scanning') || status.includes('Connecting') 
          ? 'Connecting...' 
          : status === 'Connected!' 
            ? 'Connected!' 
            : 'Connect to ESP32'}
      </button>
      <p style={{ fontSize: '1.8rem', marginTop: '40px' }}>
        Status: {status}
      </p>
      {error && <p style={{ color: '#ff5555', fontSize: '1.5rem', marginTop: '20px' }}>{error}</p>}
    </div>
  );
}