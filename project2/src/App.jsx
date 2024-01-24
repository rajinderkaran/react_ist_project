import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setcounter]=useState(0)

  
 const addValue =() =>{
  console.log("add vale", counter)
  //counter = counter+1;
  setcounter(precounter =>precounter+1);
  setcounter(precounter =>precounter+1);
  setcounter(precounter =>precounter+1);
  setcounter(precounter =>precounter+1);
 }

 const removeValue=()=>{ 
  if(counter>0)
 { setcounter(counter-1);}
 }

  return (
    <>
    <h1>Chai or code</h1>
    <h2>counter value : {counter}</h2>
    <button  onClick={addValue}>add value </button><br/>
    <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
