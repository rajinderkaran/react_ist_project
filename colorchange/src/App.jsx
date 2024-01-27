import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [colour, setColour] = useState("red")
  

  return (
   <>
   <div className="w-full h-screen duration-200" 
   style={{backgroundColor:colour}}>

    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button onClick={()=>setColour("red")} className=" px-4 py-1 rounded-full" style={{backgroundColor:"red"}}>red</button>
        <button onClick={()=>setColour("pink")} className=" px-4 py-1 rounded-full" style={{backgroundColor:"pink"}}>red</button>
        <button onClick={()=>setColour("yellow")} className=" px-4 py-1 rounded-full" style={{backgroundColor:"yellow"}}>red</button>
        <button onClick={()=>setColour("green")} className=" px-4 py-1 rounded-full" style={{backgroundColor:"green"}}>red</button>
      </div>
    </div>
   </div>
   </>
  )
}

export default App
