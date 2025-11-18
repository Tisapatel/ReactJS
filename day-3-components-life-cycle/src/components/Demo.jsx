import React, { useEffect } from 'react'

const Demo = () => {
    useEffect(()=>{
        console.log("Demo Component Mounted...");
        return()=>{
            console.log("Demo Component UnMounted...")
        }
    })
  return (
    <>
    <h2>Hello React dev</h2>   
    </>
  )
}

export default Demo
