import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import "./mystyle.css"

// import {result} from "./mylib/data"
import { product } from './data/products'
import KfcHeader from './components/header'
import ImgTop from './components/topimg'
import ImgCard from './components/card'

function App() {

  return (
    <div>
     <KfcHeader className="bottom"/>
      <ImgTop className="bottom"/>
      <ImgCard class card/>       
    </div> 
  
    

  )
}

export default App;
