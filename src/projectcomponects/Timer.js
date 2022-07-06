

import React, { useState } from 'react'

export const Timer = () => {

    // you r destop time
    const time= new Date().toLocaleTimeString();

    //varible insitze
    const[ctime,setTime]=useState(time);
    

    //create function calling by button
    function updatebutton()
    {
        const updatetime= new Date().toLocaleTimeString();
        setTime(updatetime);

    }

    //for stop and start
    setInterval(updatebutton,1000)

  return (

    <>
    {/* disply the value in output */}
    <h1>{ctime}</h1>
    //create button for calling the function
    {/* <button onClick={updatebutton}>click</button> */}
  
    </>
    
  )
}

