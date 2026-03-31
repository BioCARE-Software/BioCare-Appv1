import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px' }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '80px' }}>BioCare</h1>
      <Link to="/presets"><button style={btn}>PRESET MANAGER</button></Link>
      <Link to="/precision-grip"><button style={btn}>CREATE GESTURE</button></Link>
      <Link to="/live-data"><button style={btn}>LIVE DATA</button></Link>
      <Link to="/settings"><button style={btn}>SETTINGS</button></Link>
    </div>
  )
}

const btn = {
  background: '#d33c32',
  color: 'white',
  fontSize: '1.8rem',
  fontWeight: 'bold',
  padding: '1.2rem 3rem',
  borderRadius: '999px',
  border: 'none',
  cursor: 'pointer',
  margin: '1.5rem auto',
  display: 'block',
  width: '320px'
}