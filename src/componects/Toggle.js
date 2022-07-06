
import React, { useState } from 'react'

 const Toggle = () => {

    const[name,setName]=useState("yuvraji");
    const[age,setAge]=useState(18);
  return (
    <div>

<h1>{name}</h1>
<h1>{age}</h1>


<button onClick={()=>setName("sikun")}>FucntionButton</button>
<button onClick={()=>setAge(25)}>FucntionButton</button>
    </div>
  )
}
export  default Toggle;
