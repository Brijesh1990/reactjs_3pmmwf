import React,{useState,useEffect,useRef} from 'react'
import {useNavigate,useParams } from 'react-router-dom';
import { MDBContainer,MDBRow,MDBCard,MDBCardImage, MDBCardBody } from 'mdb-react-ui-kit'
import axios from 'axios';
import Header from './Header';
import Navbar from './Navbar';
export default function ProductDetails() {
// stored a data 
const[proddata,setProdData]=useState([]);
const{id}=useParams();
const productname=useRef("");
const oldprice=useRef("");
const newprice=useRef("");
const qty=useRef("");
// fetch dynamic products details 
useEffect(()=>{ 
axios.get(`http://localhost:8000/addproducts/${id}`).then((response)=>{
setProdData(response.data);
     
   productname.current.value=response.data.productname;
   oldprice.current.value=response.data.oldprice;
   newprice.current.value=response.data.newprice;
   qty.current.value=response.data.qty
});

},[proddata]);

return (
<div>
<Header />
<Navbar />

<MDBContainer className='p-5 mt-5'>
<h1 className='bg-dark text-white p-2'>Home | Products Details</h1>
<MDBRow>
<div className='col-md-5 shadow mt-4'>
<img src="" alt='products' className='img-fluid' style={{width:"350px", height:"350px"}}/>
</div>
<div className='col-md-7 mt-4 text-start'>
<p className='h3 ms-3'><input type='text' readOnly ref={productname} style={{border:"none"}} /></p>

<p className='h6 ms-3'>Rs.<del><input type='text' readOnly ref={oldprice} style={{border:"none", width:"85px"}}  /></del> <input type='text' readOnly ref={newprice} style={{border:"none"}}  /></p>
<label className='ms-3'>select qty</label>
<br />
<p className='ms-3'><input type='number' min="1" max="10" readOnly ref={qty} style={{border:"none"}} className='form-control w-50 border border-1'  /></p>

<p className='ms-3 h3 bvg-dark text-dark'>Subtotals of Products :<label></label> </p>

<p className='ms-3 mt-5'>
<button type='button' className='btn btn-md w-25 bg-success text-white'>ContinueShopping</button>

<button type='button'   className='btn btn-md w-25 ms-4 bg-dark text-white'>AddToCart</button>
</p>
</div>
</MDBRow>
</MDBContainer>
</div>
)
}
