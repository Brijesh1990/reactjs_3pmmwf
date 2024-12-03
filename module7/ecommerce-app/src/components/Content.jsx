import React,{useState,useEffect} from 'react'
import img from '../assets/images/routing.png'
import { Link, useNavigate } from 'react-router-dom';
import { MDBContainer,MDBRow,MDBCard,MDBCardImage, MDBCardBody } from 'mdb-react-ui-kit'
import axios from 'axios';

export default function Content() {
// stored a data 
const[data,setData]=useState([]);
const navigate=useNavigate();

//fetch category to show in dropdown in add subcategory 
const[catdata,setCatData]=useState([]);
useEffect(()=>{ 
axios.get(`http://localhost:8000/addcategory`).then((response)=>{
setCatData(response.data);
})

},[catdata]);

// fetch dynamic products added via admin
const[proddata,setProdData]=useState([]);
useEffect(()=>{ 
axios.get(`http://localhost:8000/addproducts`).then((response)=>{
setProdData(response.data);
})

},[proddata]);

return (
<div>
{/* sliders load here */}
<div
id="carouselExampleIndicators"
className="carousel slide"
data-bs-ride="carousel"
>
<div className="carousel-indicators">
<button
type="button"
data-bs-target="#carouselExampleIndicators"
data-bs-slide-to={0}
className="active"
aria-current="true"
aria-label="Slide 1"
/>
<button
type="button"
data-bs-target="#carouselExampleIndicators"
data-bs-slide-to={1}
aria-label="Slide 2"
/>
<button
type="button"
data-bs-target="#carouselExampleIndicators"
data-bs-slide-to={2}
aria-label="Slide 3"
/>
</div>
<div className="carousel-inner">
<div className="carousel-item active">
<img src="https://images.vexels.com/content/195908/preview/german-text-ecommerce-web-slider-9dba41.png" className="d-block w-100" alt="..." />
</div>
<div className="carousel-item">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvHUjTGoSJb0Mmk_V4ZmL0Qqweg5yHBHB16Nwxxl7eK3snm0EcJz7FR63uE6A2aXHLZaY&usqp=CAU" className="d-block w-100" alt="..." />
</div>
<div className="carousel-item">
<img src="https://webeminence.com/wp-content/uploads/2021/02/iStock-831640620.jpg" className="d-block w-100" alt="..." />
</div>
</div>
<button
className="carousel-control-prev"
type="button"
data-bs-target="#carouselExampleIndicators"
data-bs-slide="prev"
>
<span className="carousel-control-prev-icon" aria-hidden="true" />
<span className="visually-hidden">Previous</span>
</button>
<button
className="carousel-control-next"
type="button"
data-bs-target="#carouselExampleIndicators"
data-bs-slide="next"
>
<span className="carousel-control-next-icon" aria-hidden="true" />
<span className="visually-hidden">Next</span>
</button>
</div>

<MDBContainer className='p-5 mt-5'>
<MDBRow>

<div className='col-md-4'>
<h1 className='bg-dark text-white p-2'>select Category</h1>
<ul className='p-4 sidebar'>
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
{/* offer zones */}
<h1 className='bg-dark text-white p-2'>50% off</h1>
<MDBCard>
    <MDBCardBody>
    
    {proddata.filter((key,items)=>key.newprice<=4500).map((item)=>{

            return(
                <>
                <img src={item.imgurl} alt='products' className='img-fluid' style={{width:"350px", height:"350px"}}/>
                <p className='h3 text-center'>{item.productname}</p>
                <p className='h6 text-center'><del>{item.oldprice}</del>  {item.newprice}</p>
                <p className='text-center'><button type='button'   className='btn btn-md w-100 bg-dark text-white'>Click for details</button></p>

                </>
            )
        })}
    </MDBCardBody>
</MDBCard>
</div>
<div className='col-md-8'>
<MDBRow>
{proddata && proddata.map((item)=>{
            return(
                <>
              
                <div className='col-md-4'>
                <img src={item.imgurl} alt='products' className='img-fluid' style={{width:"350px", height:"350px"}}/>
                <p className='h3 text-center'>{item.productname}</p>
                <p className='h6 text-center'><del>{item.oldprice}</del>  {item.newprice}</p>
                <p className='text-center'><button type='button' onClick={()=>navigate(`/products-details/${item.id}`)} className='btn btn-md w-100 bg-dark text-white'>Click for details</button></p>
               </div>
            
                </>
            )
        })}

        </MDBRow>
</div>
</MDBRow>
</MDBContainer>
</div>
)
}
