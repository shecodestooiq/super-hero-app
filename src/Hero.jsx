import React, { useEffect, useState } from 'react'

const Hero = () => {
    const[data,setData]=useState([{}]);
    useEffect(()=>{
        fetch("https://superheroapi.com/api/3620512024851054/70/image")
        .then(response=>response.json())
        .then((json)=>{
            setData(json)
        })
    },[])
  return (
    <div>
        <img src={data.url}/>

    </div>
  )
}

export default Hero