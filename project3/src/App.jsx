import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)
let myObj={
  username:"rajinder kumar",
  age:22
}
  return (
   <>
   <h1 className='bg-green-400 p-6 rounded-2xl mb-4'>tailwind</h1>

<Card username="jai shree ram" btntext="click me" />            
<Card username="rajinder kumar" btntext="click me" />

   </>
  )
}

export default App
