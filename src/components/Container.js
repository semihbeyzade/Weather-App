import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { DataContext } from '../context/DataContext'

function Container() {
    const {data, setSearch, input, setInput, search} = useContext(DataContext)
   
  
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(input);
    }

    console.log(data);
  return (
    <div className='container-component'>
         <div className=' container'>
             <div className='row justify-content-center mt-2'>
                <div className='col md-4'>
                    <div className="card text-white text-center border-0 ">
                    <img src="https://picsum.photos/seed/picsum/600/900" class="card-img" alt="..." />
                    <div className="card-img-overlay">
                        <form onSubmit={handleSubmit}>
                        <div class="input-group mb-4 w-75 mx-auto">
                          <input  onChange={(e) => setInput(e.target.value)} type="search" name="search" value={input} class="form-control" placeholder="Search City" aria-label="Search City" aria-describedby="basic-addon2"/>
                          <button type='submit' class="input-group-text" id="basic-addon2">
                              <i className='fas fa-search'></i>
                          </button>
                          </div>
                        </form>
                        <div className='bg-dark bg-opacity py-3 '>
                    <h5 class="card-title">{search}</h5>
                    <p class="card-text lead">
                        Thursday, October 14, 2021
                        
                    </p>
                    <hr/>
                   {/*  <i className='fas fa-cloud fa-4x'></i> */}
                   <img src={data.weather ? ("http://openweathermap.org/img/w/" + data.weather[0].icon + ".png" ) : ""} />
                   <h1 className='fw-bolder mb-5' >{Object.entries(data).length !== 0 && data.main.temp} &deg;C</h1>
                   <p className='lead fw-bolder mb-0 '>{Object.entries(data).length !== 0 && data.weather[0].main}</p>
                   <p className='lead'>{Object.entries(data).length !== 0 && data.main.temp_min}  &deg;C | {Object.entries(data).length !== 0 && data.main.temp_max}  &deg;C</p>
                    </div>
                   </div>
                </div>
                </div>
             </div>
         </div>
    </div>
  )
}

export default Container
