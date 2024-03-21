import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { count } from 'console';


export default function App(){
  let [counter, update]=useState(0);
 const increment=() =>{
  update(counter +1 );
 }
 return (
    <>
    <h2>Counter</h2>
    <h2>counter={counter}</h2>
    <button onClick={increment}>Click here</button>
    </>
  )
 }

  // const myFunction=(name) => {
  //   alert(`Welcome dear ${name}`);
  // }
  // return(
  //   <>
  //   <h2>Welcome message</h2>
  //   <button onClick={() =>myFunction("TAHIR")}>Click here</button>
  //   </>
  // )
  

