import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { useState, useEffect } from 'react'
//FIX THIS IT IS FAKEEEEE
export default function LiveData() {
  const [data, setData] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => [...prev, { time: new Date().toLocaleTimeString(), value: Math.random() * 100 }].slice(-20))
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ padding: '100px 20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '4rem' }}>Live Data</h1>
      <LineChart width={900} height={500} data={data} style={{ margin: '0 auto' }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis dataKey="time" stroke="#aaa" />
        <YAxis stroke="#aaa" />
        <Tooltip contentStyle={{ background: '#1a1a1a', border: 'none', color: '#fff' }} />
        <Line type="monotone" dataKey="value" stroke="#3fa7df" strokeWidth={3} dot={false} />
      </LineChart>
    </div>
  )
}