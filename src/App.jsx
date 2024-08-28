import { useState } from 'react'
import Chess from './Chess'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Chess/>
    </>
  )
}

export default App
