// src/pages/Settings.jsx
import { useState } from 'react';

let globalDevice = null;
let globalControlChar = null;

export default function Settings() {
  const [status, setStatus] = useState('Disconnected');
  const [isConnecting, setIsConnecting] = useState(false);

  const connectBLE = async () => {
    if (isConnecting) return;
    setIsConnecting(true);
    setStatus('Scanning for BioCare_ProstheticESP32...');

    try {
      const device = await navigator.bluetooth.requestDevice({
        filters: [{ namePrefix: 'BioCare' }],
        optionalServices: ['b36ffaec-2ef4-4f92-8240-05877b9d71e6']
      });

      setStatus('Connecting to device...');
      const server = await device.gatt.connect();

      setStatus('Getting service...');
      const service = await server.getPrimaryService('b36ffaec-2ef4-4f92-8240-05877b9d71e6');

      setStatus('Getting control characteristic...');
      globalControlChar = await service.getCharacteristic('36e89808-bb82-471d-9791-a2dc10994675');
      globalDevice = device;

      setStatus('✅ Connected successfully!');
      alert('ESP32 Connected! You can now send commands from Precision Grip.');

    } catch (err) {
      console.error(err);
      setStatus(`❌ Failed: ${err.message}`);
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '80px 20px', background: '#111', minHeight: '100vh', color: '#fff' }}>
      <h1 style={{ fontSize: '3.5rem', marginBottom: '60px' }}>Settings</h1>
      
      <button 
        onClick={connectBLE} 
        disabled={isConnecting || status.includes('Connected')}
        style={{
          background: status.includes('Connected') ? '#4CAF50' : '#d33c32',
          color: 'white',
          fontSize: '2rem',
          padding: '20px 60px',
          borderRadius: '999px',
          border: 'none',
          cursor: isConnecting ? 'not-allowed' : 'pointer',
          marginBottom: '40px'
        }}
      >
        {isConnecting ? 'Connecting...' : status.includes('Connected') ? '✅ Connected' : 'Connect to ESP32'}
      </button>

      <p style={{ fontSize: '1.8rem' }}>Status: {status}</p>
    </div>
  );
}