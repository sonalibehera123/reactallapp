


import React from 'react'
import { useState } from 'react'

import "./calc.css";

export const Calculetter = () => {

    const[result,setResult]=useState("");

    function clickhandler(e)
    {
        setResult(result.concat(e.target.value));
    }


    function claerHandler(e)
    {
        setResult("");

    }
function resulthandler(e)
{
    setResult(eval(result));
}

  return (
    <>
    <div className='calc'>

        <input type='text' placeholder='0' id='answer' value={result} ></input>
        <input type='button' value="9"onClick={clickhandler} className='buttonname'></input>
        <input type='button' value="8" onClick={clickhandler} className='buttonname'></input>
        <input type='button' value="7" onClick={clickhandler} className='buttonname'></input>
        <input type='button' value="6" onClick={clickhandler} className='buttonname'></input>
        <input type='button' value="5"onClick={clickhandler} className='buttonname'></input>
        <input type='button' value="4"onClick={clickhandler} className='buttonname'></input>
        <input type='button' value="3"onClick={clickhandler}className='buttonname'></input>
        <input type='button' value="2"onClick={clickhandler}className='buttonname'></input>
        <input type='button' value="1"onClick={clickhandler}className='buttonname'></input>
        <input type='button' value="0"onClick={clickhandler}className='buttonname'></input>
        <input type='button' value="-"onClick={clickhandler}className='buttonname'></input>
        <input type='button' value="+"onClick={clickhandler}className='buttonname'></input>
        <input type='button' value="*"onClick={clickhandler}className='buttonname'></input>
        <input type='button' value="/"onClick={clickhandler}className='buttonname'></input>
        <input type='button' value="."onClick={clickhandler}className='buttonname'></input>
        <input type='button' value="%"onClick={clickhandler}className='buttonname'></input>
        <input type='button' value="clear" onClick={claerHandler} className='buttonname button1'></input>
        <input type='button' value="=" onClick={resulthandler} className='buttonname button1'></input>


    </div>
    
    </>
  )
}
