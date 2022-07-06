
import React, { useState } from 'react'

export const Form = () => {

    const[name,Setname]=useState("");
    const[age,setAge]=useState("");
    const[adress,setAdress]=useState("")



    function test()
    {
    
        let data={name,age,adress};
        console.warn("the value ",data);
    }



  return (
    <div>





<form>

<input type="text" name="name"  onChange={(e)=>Setname(e.target.value)} placeholder="enterr the name" value={name}></input>
<br/>

<input type="text" name="age"onChange={(e)=>setAge(e.target.value)} placeholder="enterr the age" value={age}></input>

<br/>

<input type="text" name="adress"onChange={(e)=>setAdress(e.target.value)} placeholder="enterr the adress" value={adress}></input>

<button onClick={test} >Submit</button>

</form>


    </div>
  )
}
