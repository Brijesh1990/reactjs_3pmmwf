import React,{useState,useEffect,useRef} from 'react'
import { MDBContainer,MDBRow,MDBCard,MDBCardBody } from 'mdb-react-ui-kit'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
export default function Contact() {
//destructuring of contact us data  // 
const[data,setData]=useState("");
const name=useRef("");
const email=useRef("");
const phone=useRef("");
const subject=useRef("");
const message=useRef("");
const navigate=useNavigate();
// call api via axios.post()
const addFormData=(e)=>{
  e.preventDefault();
  var ins={
    name:name.current.value,
    email:email.current.value,
    phone:phone.current.value,
    subject:subject.current.value,
    message:message.current.value
   
  }
  // call api here
  axios.post(`http://localhost:8000/contact-us`,ins).then(()=>{
    // pass message
    Swal.fire({
      title: "Good job!",
      text: "Thanks for contact with us Our admin will contact with you soon!",
      icon: "success"
    });

  });
  navigate('/contact-us');
  e.target.reset();
}

return (
<div>
<Header />
<Navbar />
<MDBContainer className='p-5 mt-5'>
<MDBRow>
<div className='col-md-4'>
<h3>Our Office Address</h3>
<hr />
<p><b>Office Name :</b>Tops Technology pvt ltd</p>
<p><b>Address :</b>Tops Technology pvt ltd behind indiara circle <br />
above sbi bank aditya complex first floor <br />
jalaram plot-2 Rajkot - 360005
</p>
<p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.6799314943046!2d70.77238027412226!3d22.29011104326695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca248c77c099%3A0xdf5ac10af64ac8ee!2sTOPS%20Technologies!5e0!3m2!1sen!2sin!4v1726136766438!5m2!1sen!2sin" width="90%" height="250" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
</div>
<div className='col-md-8'>
<MDBCard>
<MDBCardBody className='p-1'>
<h2 className='text-center'>Contact us Form</h2>
<form onSubmit={addFormData} className='w-75 p-5 mx-auto'>
<div className='form-group mt-2'>
<input type='text' ref={name} placeholder='Name *' className='form-control' />
</div>
<div className='form-group mt-2'>
<input type='text' ref={email} placeholder='Email *' className='form-control' />
</div>

<div className='form-group mt-2'>
<input type='text' ref={phone} placeholder='Phone *' className='form-control' />
</div>

<div className='form-group mt-2'>
<input type='text' ref={subject} placeholder='Subject *' className='form-control' />
</div>

<div className='form-group mt-2'>
<textarea type='text' ref={message} placeholder='Message *' className='form-control'></textarea>
</div>
<div className='form-group mt-2'>
<input type='submit'  className='btn btn-sm btn-dark text-white' value="Send" /> 
</div>
</form>

</MDBCardBody>
</MDBCard>
</div>

</MDBRow>
</MDBContainer>

<Footer />

</div>
)
}