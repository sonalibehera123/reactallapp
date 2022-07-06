import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { World } from './World';
import { Country } from './Country';



//parent coponect
export const Covid = () => {

  //variable declar
const[result,setResult]=useState([]);//set blank arraay

const[country,setcountry]=useState([]);


//life cyle handler
useEffect(()=>{

  //fetch the api then give promisses 

axios.get('https://api.covid19api.com/summary').then((response)=>{


console.log(response.data.Global);
setResult(response.data.Global); //set the values get from api and store in to variable
setcountry(response.data.Countries)


})

})



  return (
    
    <div className='container'>

//world componect as a child className
//passs the parent data to child componect by through props=world
        <World world={result}></World>

        <table className='table table-bordered table-striped text-center shadow'>
          <thead>
            <tr>
              <th>Country</th>
              <th>NewConfirmed</th>
              <th>TotalConfirmed</th>
              <th>NewDeaths</th>
              <th>TotalDeaths</th>
              <th>NewRecovered</th>
              <th>TotalRecovered</th>
            </tr>
          </thead>
          <tbody>

            {

//retrive value one by one
              country.map((value)=>{

                return(

                  <Country country={value} key={value.Country}></Country>
                )
              })
            }
          </tbody>
        </table>
    </div>
    
    
  )
}
