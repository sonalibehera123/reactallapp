
import React, { useEffect, useState } from 'react'

export const ADummyApi = () => {
    // http://dummy.restapiexample.com/api/v1/employees
    const[value,setValue]=useState([]);

    useEffect(()=>{

        fetch("http://dummy.restapiexample.com/api/v1/employees").then((data)=>{

             console.warn("data iss",data);

             data.json().then(result=>{


                console.warn("result",result);

                setValue(result.data);
             })
        })


    },[]);


  return (
    <div>
<table>


    <tr>

        <th>Id</th>
        <th>name</th>
        <th>salary</th>
    </tr>

    <tbody>

        {value.map((item,index)=>
<tr key={index}>

    <td>{item.id}</td>
    <td>{item.employee_name}</td>
    <td>{item.employee_salary}</td>
</tr>

        )
        }
    </tbody>
</table>



    </div>
  )
}
