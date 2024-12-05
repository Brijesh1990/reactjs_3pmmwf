import React,{useState,useEffect,useRef} from 'react'
import {useNavigate,useParams,Link, redirect } from 'react-router-dom';
import { MDBContainer,MDBRow,MDBCard,MDBCardImage, MDBCardBody } from 'mdb-react-ui-kit'
import axios from 'axios';
import Header from './Header';
import Navbar from './Navbar';
import Swal from 'sweetalert2';
export default function ProductDetails() {
// stored a data 
const[proddata,setProdData]=useState([]);
const{id}=useParams();
const images=useRef("");
const imgurl=useRef("");
const productname=useRef("");
const oldprice=useRef("");
const newprice=useRef("");
const qty=useRef("");
const descriptions=useRef("");
// fetch dynamic products details 
useEffect(()=>{ 
axios.get(`http://localhost:8000/addproducts/${id}`).then((response)=>{

   images.current.src=response.data.imgurl;
   imgurl.current.value=response.data.imgurl;  
   productname.current.value=response.data.productname;
   oldprice.current.value=response.data.oldprice;
   newprice.current.value=response.data.newprice;
   qty.current.value=response.data.qty,
descriptions.current.value=response.data.descriptions
});

},[]);

// add products in cart

const addCartFormData=(e)=>
   {
   e.preventDefault();
       // data stored via api 
       var addcart={
           imgurl:imgurl.current.value,
           productname:productname.current.value,
           oldprice:oldprice.current.value,
           newprice:newprice.current.value,
           qty:qty.current.value,
           descriptions:descriptions.current.value
       }
       axios.post(`http://localhost:8000/cart`,addcart).then(response => response.json())
       .then(json => console.log(json));
       Swal.fire('Products added in cart successfully')
   
       redirect('/viewcart');
       
   }
  

return (
<div>
<Header />
<Navbar />

<MDBContainer className='p-5 mt-5'>
<h1 className='bg-dark text-white p-2'>Home | Products Details</h1>

<form onSubmit={addCartFormData}>
<MDBRow>

<div className='col-md-5 shadow mt-4'>
<img src={images} ref={images} alt='products' className='img-fluid' style={{width:"350px", height:"350px"}}/>
</div>
<div className='col-md-7 mt-4 text-start'>
<input type="hidden" ref={imgurl} />
<p className='h3 ms-3'><input type='text' readOnly ref={productname} style={{border:"none"}} /></p>

<p className='h6 ms-3'>Rs.<del><input type='text' readOnly ref={oldprice} style={{border:"none", width:"85px"}}  /></del> <input type='text' readOnly ref={newprice} style={{border:"none"}}  /></p>
<label className='ms-3'>select qty</label>
<br />
<p className='ms-3'><input type='number' min="1" max="10" readOnly ref={qty} style={{border:"none"}} className='form-control w-50 border border-1'  /></p>

<p className='ms-3 h3 bvg-dark text-dark'>Subtotals of Products :<label><input type='text' ref={newprice} readOnly style={{border:"none"}}/></label> </p>


<p className='ms-3 h3 bvg-dark text-dark'>Products Descriptions :</p>
<br/>
<textarea  ref={descriptions} readOnly style={{border:"none",width:"100%",height:"auto"}}></textarea>

<p className='ms-3 mt-5'>
<Link to="/"><button type='button' className='btn btn-md  bg-success text-white'>ContinueShopping</button></Link>

<button type='submit'   className='btn btn-md  ms-4 bg-dark text-white'>AddToCart</button>
</p>
</div>

</MDBRow>

</form>
</MDBContainer>
</div>
)
}
