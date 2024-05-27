import { useState } from 'react'
import Leaderboard from './component/Leaderboard';
import Navbar from './component/Navbar';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="App">
       <Navbar />
      <Leaderboard />
    </div>
    </>
  )
}

export default App
