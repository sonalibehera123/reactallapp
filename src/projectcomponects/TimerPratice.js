import React, { useState } from 'react'

export const TimerPratice = () => {

 const time = new Date().toLocaleTimeString();
 const[ctime,setctime]=useState(time);
  function updeatTime(){
    const update = new Date().toLocaleTimeString();
setctime(update);
  }

  setInterval(updeatTime,1000);

  



  return (
    <>
    <h1>{ctime}</h1>
    {/* <button onClick={updeatTime}>submit</button> */}
    
    
    </>
  )
}
