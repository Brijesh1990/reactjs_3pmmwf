import React,{useEffect,useState} from 'react'
import { MDBContainer,MDBRow,MDBCard,MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import crt from '../assets/images/cart.webp'
import axios from 'axios'
export default function Cart() {
// manage all contact us data in admin panel
const[data,setData]=useState(0);
useEffect(()=>{
axios.get(`http://localhost:8000/cart`).then((response)=>{
setData(response.data);
})

},[data]);

  return (
    <div>
     <Header />
      <MDBContainer className='p-5 mt-5'>
      <MDBCard>
        <p className='ms-5 fs-4'>ViewCart <span className='bi bi-cart'><span className='badge badge-sm bg-danger text-white'>{data.length}</span></span></p>
        <table className='table table-responsive table-bordered' width="100%">
          {data && data.map((item)=>{
            return(
            <>
       
         <tr className=''>
          <td><img src={item.imgurl}  style={{width:"150px",height:"115px"}} /></td>
          <td>{item.productname}</td>
          <td>{item.newprice}</td>
          <td><input type='number' min="1" max="10" value="1" className='form-control border border-0' /></td>
          <td><button type='button' className='btn btn-sm  text-danger fs-1 float-end'>&times;</button></td>
         </tr>
        
            </>
          )})}
          <tr className='p-3'>
            <td colSpan="6" className='p-3'><Link to='/checkout-here'><button type='button' className='float-end btn btn-dark bg-dark text-white'>Checkout here</button></Link></td>
          </tr>
        
          </table> 
      </MDBCard>
      </MDBContainer>

      <Footer />

    </div>
  )
}
