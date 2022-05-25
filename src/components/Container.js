import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { DataContext } from '../context/DataContext'

function Container() {
    const {data, search, setSearch, input, setInput} = useContext(DataContext)
    console.log(data);
  
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(input);
    }


  return (
    <div>
          <div>
                <form onSubmit={handleSubmit} >
                <input  onChange={(e) => setInput(e.target.value)} type='search' name="search" value={input} placeholder="Search City" className='input-api' />
                <button type='submit' >Click</button>
                </form>
                <p>{data.name}</p>
                <p>{data.main ? data.main.temp : ""} °C</p>
                <img src={data.weather ? ("http://openweathermap.org/img/w/" + data.weather[0].icon + ".png" ) : ""} />
            
                
              
            </div>
    </div>
  )
}

export default Container