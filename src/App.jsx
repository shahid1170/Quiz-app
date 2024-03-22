import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import "./mystyle.css"



export default function App() {
    let [x, setx]= useState(0) 
    
    const increment=()=>{
      setx(x+1);
    }
  return(
    <>
    <h1>Basic example</h1>
    <h2>counter={x}</h2>
    <button onClick={increment}>Click plz</button>
    
    </>
  )
   
   }
   
 


