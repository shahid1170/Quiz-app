import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import "./mystyle.css"

import {result} from "./mylib/data"

function App() {
  const marks = [60, 40, 90, 70, 34, 41, 28, 50, 88, 100, 66];
  const {pass, fail} =result(marks); 
  // const stylePass ={color:"white", backgroundColor:"black"}
  return(
   <><button type="button" className="btn btn-primary">Primary</button>
   <button type="button" className="btn btn-secondary">Secondary</button>
   <button type="button" className="btn btn-success">Success</button>
   <button type="button" className="btn btn-danger">Danger</button>
   <button type="button" className="btn btn-warning">Warning</button>
   <button type="button" className="btn btn-info">Info</button>
   <button type="button" className="btn btn-light">Light</button>
   <button type="button" className="btn btn-dark">Dark</button>
   
   <button type="button" className="btn btn-link">Link</button>
   <br />   <br /> <br />
   <h3 className="pass">Passing Sheet({pass.length})</h3>
   <ul>{
    pass.map((m,i)=><li key={i}>{m}</li>)
  }  
   </ul> 
   <h3 classnameName="fail">Failing Sheet({fail.length})</h3>
   <ul>{
   fail.map((m,i)=><li key={i}>{m}</li>)
   }
   </ul>
   </> 
  )
}

export default App;
