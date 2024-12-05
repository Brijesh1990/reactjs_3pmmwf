import React,{useState,useEffect} from 'react'
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import { MDBContainer,MDBRow,MDBCard,MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
export default function ViewCart() {
// manage all contact us data in admin panel
const[data,setData]=useState([]);
useEffect(()=>{
axios.get(`http://localhost:8000/cart`).then((response)=>{
setData(response.data);
})

},[data]);

return (
<>
<Header />
<Navbar />

<MDBContainer className='p-5 mt-5'>
<MDBCard>
<MDBCardImage src={crt} alt='cart' className='img-fluid' style={{width:"30%",marginLeft:"35%"}}/>
<p className='text-center fs-4'>Missing Cart items?</p>
<p className='text-center'>Login to see the items you added previously</p>
<p className='text-center'><Link to="/login"><MDBBtn>Login</MDBBtn></Link></p>
</MDBCard>
</MDBContainer>

<Footer />


</>
)
}
