import { useState } from 'react'
import Cards from './component/cards'
import './App.css'

function App() {
 

  return (
    <>
   
    <h2>
      Wellcome to Sweetland
    </h2>
    <h3>Lorem, ipsum dolor.</h3>
    <p style={text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, facilis.</p>
    <Cards/>
    </>
  )
}

let text = {
 "color" : "blue",
 "text-size" : "20px",
 "text-decoration" : "underline"
}
export default App
