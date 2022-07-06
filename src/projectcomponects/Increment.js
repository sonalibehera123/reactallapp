import React, { useState } from 'react'

export const Increment = () => {

const[num,setnum]=useState(0);


    function addnumber()
    {
        if(num<10)
        {

            setnum(num+1);
        }
    else{
        setnum(0);
    }

    }

    function minnumber()
    {
        if(num>0)
        {

            setnum(num-1);
        }

    }

  return (
   <>
   <button onClick={addnumber}>+</button>
   <h1 >{num}</h1>
   <button onClick={minnumber}>-</button>
   
   </>
  )
}
