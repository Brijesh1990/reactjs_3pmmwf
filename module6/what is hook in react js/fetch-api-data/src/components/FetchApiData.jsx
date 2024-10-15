import React, { useEffect, useState } from 'react'

export default function FetchApiData() {
    // destructured here
    const[photo,setPhoto]=useState([]);
    // api call here using fetch() method
    useEffect(()=>{
        // call api 
        fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log(data);
            setPhoto(data);
        })

    },[])
  return (
    <div>
    <h2>Fetch all api data using fetch() method</h2>
      {photo && photo.map((item)=>{
        return(
            <>
                
                <img src={item.url} alt='photo' />
            </>
        )
      })}
    </div>
  )
}
