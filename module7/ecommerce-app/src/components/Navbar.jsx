import React,{useState,useEffect} from 'react'
import { MDBNavbar } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import axios from 'axios';
export default function Navbar() {
//fetch category to show in dropdown in add subcategory 
const[catdata,setCatData]=useState([]);
useEffect(()=>{ 

axios.get(`http://localhost:8000/addcategory`).then((response)=>{

setCatData(response.data);
})

},[catdata]);

return (
<div>
<MDBNavbar className='nav navbar navbar-expand-md bg-dark'>
<Link  to='' className='navbar-brand text-white ms-5'>React js Routing - App</Link>
<ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/our-services">Services</Link></li>
<li><Link to="/about-us">About</Link></li>

<li className='dropdown'><Link className='navbar-toggle' data-bs-toggle="dropdown">-select Products-</Link>

<ul className='dropdown-menu' style={{width:"200px"}}>
{/* display dynamic category */}
{catdata && catdata.map((item)=>{
return(
<>
<li><Link to="/contact-us">{item.category}</Link></li>
</>
)
}
)}
</ul>

</li>

<li><Link to="/contact-us">Contact</Link></li>
<li><Link to="/feedback-us">Feedback</Link></li>
<li><Link to="/login">account</Link></li>
</ul>

</MDBNavbar>
</div>
)
}
