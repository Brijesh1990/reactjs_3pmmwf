import React,{useState,useRef,useEffect} from 'react'
import { Form,Button } from 'react-bootstrap'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import axios from 'axios'
import Swal from 'sweetalert2'
export default function AddProducts() {
//fetch category to show in dropdown in add subcategory 
const[catdata,setCatData]=useState([]);
useEffect(()=>{ 
  
    axios.get(`http://localhost:8000/addcategory`).then((response)=>{
      
        setCatData(response.data);
    })
    
},[catdata]);

const[subdata,setSubData]=useState([]);
useEffect(()=>{ 
  
    axios.get(`http://localhost:8000/addsubcategory`).then((response)=>{
      
        setSubData(response.data);
    })
    
},[subdata]);

// add products in db.json
const categoryname=useRef("");
const subcategoryname=useRef("");
const productname=useRef("");
const imgurl=useRef("");
const oldprice=useRef("");
const newprice=useRef("");
const qty=useRef("");
const descriptions=useRef("");
const date=useRef("");

const addSubcategoryFormData=(e)=>
    {
    e.preventDefault();
    // check validations rules 
    if(document.frm.categoryname.value=="")
    {
        alert('Category Name must be added')
        document.frm.categoryname.focus();
        return false;
    }
    if(document.frm.subcategoryname.value=="")
    {
        alert('subCategory Name must be added')
        document.frm.subcategoryname.focus();
        return false;
    }
    else 
    {
        // data stored via api 
        var addSubcategory={
            categoryname:categoryname.current.value,
            subcategoryname:subcategoryname.current.value,
            imgurl:imgurl.current.value,
            productname:productname.current.value,
            oldprice:oldprice.current.value,
            newprice:newprice.current.value,
            qty:qty.current.value,
            descriptions:descriptions.current.value,
            date:date.current.value
        }
        axios.post(`http://localhost:8000/addproducts`,addSubcategory).then(response => response.json())
        .then(json => console.log(json));

        Swal.fire('Addedd successfully')
        e.target.reset();
        
    }
   
}

return (
<div>
{/*admin header reused  */}
<AdminHeader /> 
<section id="dashboard-content">
<div className="container-fluid m-0 p-0">
<div className="row">
{/* sidebar */}
<AdminSidebar />
{/* dashboard content */}
{/* admin dashboard content */}
<div className="admin-dashboard col-md-9 p-3">
<h2 className="ms-3 p-4 mt-3">Add Products here</h2>
<hr className="border border-1 border-dark w-50 ms-5" align="left" />
{/* add category here */}
<Form name="frm" className='w-50 ms-5' onSubmit={addSubcategoryFormData}>

<div className='form-group mt-3'>
    <select  placeholder='Enter Category Name *' ref={categoryname} name="categoryname" className='form-control'>
      <option value="">-select Category-</option>
      {/* fetch dynamic added category here */}
      {catdata && catdata.map((item)=>{
        return(
            <>
            <option value={item.category}>{item.category}</option>
            </>
        )
      })}
    </select>
</div>


<div className='form-group mt-3'>
    <select ref={subcategoryname} name="subcategoryname"  placeholder='Enter Category Name *' className='form-control'>
      <option value="">-select SubCategory-</option>
      {/* fetch dynamic added category here */}
      {subdata && subdata.map((item)=>{
        return(
            <>
            <option value={item.subcategory}>{item.subcategory}</option>
            </>
        )
      })}
    </select>
</div>


<div className='form-group mt-3'>
    <input type='text' ref={productname} name="productname" placeholder='Enter Product Name *' className='form-control' />
</div>

<div className='form-group mt-3'>
    <input type='text' ref={imgurl} name="imgurl" placeholder='Enter Product photo url *' className='form-control' />
</div>


<div className='form-group mt-3'>
    <input type='text' placeholder='Enter Product Old Price *'  ref={oldprice} name="oldprice" className='form-control' />
</div>

<div className='form-group mt-3'>
    <input type='text' ref={newprice} name="newprice" placeholder='Enter Product New Price *' className='form-control' />
</div>



<div className='form-group mt-3'>
    <input type='number' placeholder='Enter Product qty *'  ref={qty} name="qty" className='form-control' />
</div>

<div className='form-group mt-3'>
    <textarea type='text' ref={descriptions} name="descriptions" placeholder='Enter Product Descriptions *' className='form-control'></textarea>
</div>

<div className='form-group mt-3'>
    <input type="date" ref={date} name="date" placeholder='Enter added date *' className='form-control' />
</div>


<div className='form-group mt-3'>
<input type="submit" value="AddProducts"   className='btn btn-lg btn-dark text-white' />
</div>



</Form>
</div>
</div>
</div>
</section>
</div>
)
}
