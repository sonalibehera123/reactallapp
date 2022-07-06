import axios from 'axios'
import React, { useState } from 'react'

export const Weather = () => {

const[city,setcity]=useState("")

const[data,setdaat]=useState({
    description:"",
    temp:0,
    temp_max:0,
    temp_min:0,
    humidity:0,
    sunrise:0,
    sunset:0,
    county:"",
})


function weatherclick()
{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=68adfd741f09151f568eb6276d81c028`).then((response)=>{

    console.log(response.data);

    setdaat({

        description:response.data.weather[0].description,
        temp:response.data.main.temp,
        temp_max:response.data.main.temp_max,
        temp_min:response.data.main.temp_min,
        humidity:response.data.main.humidity,
        sunrise:response.data.sys.sunrise,
        sunset:response.data.sys.sunset,
        country:response.data.sys.country,
    

    })
    })
}



  return (
    <>
    <div className='container  text-center my-3' >



<h1>Weather app using react app</h1>
<input type="text" placeholder='enter the city name' className='from control' value={city} onChange={(e)=>
    {
        setcity(e.target.value)}}></input>
<button className='btn btn-danger  mx-2' onClick={weatherclick} >weather</button>
<div className='container'>
        <div className='row'>
            <div className='col-md-3'>
                <div className='card text-white shadow text-center bg-primary mt-2' style={{minHight:'150px'}}>
                    <div className='card-body'>

<h1> description :{data.description}</h1>
                    </div>
                </div>
            </div>

            <div className='col-md-3'>
                <div className='card text-white shadow text-center bg-info my-2' style={{minHight:'150px'}}>
                    <div className='card-body'>

                    <h1>  temp <br></br>:{data.temp}</h1>
                    </div>
                </div>
            </div>

            <div className='col-md-3'>
                <div className='card text-white shadow text-center bg-primary mt-2' style={{minHight:'150px'}}>
                    <div className='card-body'>

<h1>Tempmax <br></br>:{data.temp_max}</h1>
                    </div>
                </div>
            </div>
            <div className='col-md-3'>
                <div className='card text-white shadow text-center bg-danger mt-2' style={{minHight:'150px'}}>
                    <div className='card-body'>

<h1>Tempmin:{data.temp_min}</h1>
                    </div>
                </div>
            </div>
            <div className='col-md-3'>
                <div className='card text-white shadow text-center bg-default mt-2' style={{minHight:'150px'}}>
                    <div className='card-body'>

<h1>Humidity <br></br>:{data.humidity}</h1>
                    </div>
                </div>
            </div>
            <div className='col-md-3'>
                <div className='card text-white shadow text-center bg-success mt-2' style={{minHight:'150px'}}>
                    <div className='card-body'>

<h1>Sunrise<br></br>:{data.sunrise}</h1>
                    </div>
                </div>
            </div>

            <div className='col-md-3'>
                <div className='card text-white shadow text-center  bg-default mt-2' style={{minHight:'150px'}}>
                    <div className='card-body'>

<h1>Sunset<br></br>:{data.sunset}</h1>
                    </div>
                </div>
            </div>

            <div className='col-md-3'>
                <div className='card text-white shadow text-center bg-success mt-2' style={{minHight:'150px'}}>
                    <div className='card-body'>

<h1>country<br></br>:{data.country}</h1>
                    </div>
                </div>
            </div>


           
        </div>
    </div>

    </div>



    </>
  )
}

