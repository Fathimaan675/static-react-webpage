import { useState } from 'react'

import './App.css'
import Picturediv from './components/Picturediv'
import Mfooter from './components/Mfooter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
<Picturediv/>
< Mfooter/>
     
    </>
  )
}

export default App
