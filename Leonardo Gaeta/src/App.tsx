import { useState } from 'react'
import { Button } from './components/button';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button counter={count} setCounter={setCount} increment={1} text="+" />

      <span>
        {count}
      </span>

      <Button counter={count} setCounter={setCount} increment={-1} text='-' />
    </>
  )
}

export default App
