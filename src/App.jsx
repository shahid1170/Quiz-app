import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import "./mystyle.css"



export default function App() {
    let [marks, setMarks]= useState([54,63,48,49,51])
    
    const increment=(index)=>{
      const copyMarks=[...marks];
      copyMarks[index]++;
      setMarks=copyMarks(i);

    }
    const decrement=(index)=>{
      const copyMarks=[...marks];
      copyMarks[index]--;
      setMarks=copyMarks(i);
    }
  return(
    <div className="container my-5">
      {
      marks.map((m, i) =>(
        <div>
        <button onClick={() =>increment(i)}>+</button>
        {m} : {m >= 50? "pass" : "fail"}
        <button onClick={()=>decrement(i)}>-</button>
        </div>

      ))}
      
    </div>
  )
   
   }
   
 


