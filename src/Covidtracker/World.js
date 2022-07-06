

import React from 'react'

export const World = (props) => {

   const world=  props.world; //props passed by parent componects
  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className='col-md-4'>
                <div className='card text-white shadow text-center bg-primary mt-2' style={{minHight:'150px'}}>
                    <div className='card-body'>

<h1>NewConfirmed :{world.NewConfirmed}</h1>
                    </div>
                </div>
            </div>

            <div className='col-md-4'>
                <div className='card text-white shadow text-center bg-success my-2' style={{minHight:'150px'}}>
                    <div className='card-body'>

<h1>TotalConfirmed :{world.TotalConfirmed}</h1>
                    </div>
                </div>
            </div>

            <div className='col-md-4'>
                <div className='card text-white shadow text-center bg-danger mt-2' style={{minHight:'150px'}}>
                    <div className='card-body'>

<h1>NewDeaths <br></br>:{world.NewDeaths}</h1>
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='card text-white shadow text-center bg-danger mt-2' style={{minHight:'150px'}}>
                    <div className='card-body'>

<h1>TotalDeaths:{world.TotalDeaths}</h1>
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='card text-white shadow text-center bg-success mt-2' style={{minHight:'150px'}}>
                    <div className='card-body'>

<h1>NewRecovered <br></br>:{world.NewRecovered}</h1>
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='card text-white shadow text-center bg-success mt-2' style={{minHight:'150px'}}>
                    <div className='card-body'>

<h1>TotalRecovered<br></br>:{world.TotalRecovered}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
