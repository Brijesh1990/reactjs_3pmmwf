import React, { useEffect, useState } from 'react'

export default function UserApiData() {
    // destructured here
    const[user,setUser]=useState([]);
    // api call here using fetch() method
    useEffect(()=>{
        // call api 
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log(data);
            setUser(data);
        })

    },[])
  return (
    <div>
    <h2>Fetch all api data using fetch() method</h2>
      {user && user.map((item)=>{
        return(
            <>
            <div className='parent'>
               <div className='child'>
                <p><b key={item.username}>UserName is :</b>{item.username}</p>
                <p><b key={item.email}>Email is :</b>{item.email}</p>
               </div>
            </div>  
            
            </>
        )
      })}
    </div>
  )
}
