

import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Fetchimage = (props) => {

    const [photo, setphoto] = useState("");
    const [result, setResult] = useState([]);

    

    function fetchimage() {
        axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=cYVjAToFIiPxWN7ukS0FyXOhxmx6LQYiVufh8KjzwTM`).then((response) => {

            console.log(response.data.results);
            setResult(response.data.results);
        })


    }

    return (

        <>

            <div className='container my-2 text-center'>

                <input type="text" value={photo} placeholder="enter searching image" className='form-control' onChange={(e) => { setphoto(e.target.value) }}></input>

                <button type='submit' className='btn btn-danger my-5' onClick={fetchimage}> Image</button>
            </div>


            <div className='conatainer my-2'>

                <div className='row text-center text-lg-start'>

                    {
                        result.map((value) => {


                            return (

                                <div className='col-lg-3 col-md-4 col-6'>

                                    <img className='image-fluid d-block md-4 h-100' src={value.urls.small}></img>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </>



    )
}
