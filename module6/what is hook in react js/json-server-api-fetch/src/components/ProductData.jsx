import React, { useEffect, useState } from 'react'
import { Container,Row,Button } from 'react-bootstrap';
export default function ProductData() {
    // destructuring in array 
      const[product,setProduct]=useState([]);
    //   fetch api 
    useEffect(()=>{

        fetch(`http://localhost:8000/products`)
        .then((res)=>{
              return res.json();
        })
        .then((data)=>{
            console.log(data);
            setProduct(data);
        })


    },[product])
  return (
    
    <Container className='mt-5'>
     <h2 className='ms-5'>Local json server fetch api</h2>
     <hr className='w-50 ms-5' />
        <Row>
            
     {product && product.map((item)=>{
        return(
            <>
          
                
                    <div className='col-md-3 text-center shadow m-5'>
                        <p><img src={item.photo} alt='photo' className='img-fluid' style={{width:"70%", height:"250px"}} /></p>
                        <p className='fs-3'>{item.name}</p>
                        <p className='fs-3'>Rs.<del>{item.oldprice}</del></p>
                        <p className='fs-3'>Rs.{item.price}</p>

                    </div>
              
            </>
        )
     })}  
     
     </Row>
    </Container>    

  )
}
