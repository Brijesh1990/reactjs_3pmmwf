import React,{useState,useEffect,useRef} from 'react'
import { Form,Button } from 'react-bootstrap'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import Swal from 'sweetalert2'
import axios from 'axios'
export default function AddSubCategory() {
//fetch category to show in dropdown in add subcategory 
const[data,setData]=useState([]);
useEffect(()=>{ 
  
    axios.get(`http://localhost:8000/addcategory`).then((response)=>{
      
        setData(response.data);
    })
    
},[data]);

// add subcategory here
const categoryInp = useRef("")
const subcategoryInp = useRef("")
const subcategoryDescInp = useRef("")
const dateInp = useRef("")

const handleSubmit = (e)=>{
const category = categoryInp.current.value;
const subcategory = subcategoryInp.current.value;
const subcategoryDesc = subcategoryDescInp.current.value;
const date = dateInp.current.value;
// alert("hiii")
e.preventDefault()

if(!category) {
alert("Enter category")
subcategoryInp.current.focus()
} else if(!subcategoryDesc) {
alert("Enter Subcategory description")
subcategoryDescInp.current.focus()
} else if(!date) {
alert("Select Date")
dateInp.current.focus()
} else {

var subcategoryObj = {
category:categoryInp.current.value,
subcategory:subcategoryInp.current.value,
subcategoryDesc:subcategoryDescInp.current.value,
dateInp:dateInp.current.value
}
axios.post(`http://localhost:8000/addsubcategory`, subcategoryObj)
.then((res)=>res.data)
console.log("subcategory Added.")
Swal.fire('Subcategory addedd successfully');
categoryInp.current.value = ""
subcategoryInp.current.value = ""
subcategoryDescInp.current.value = ""
dateInp.current.value = ""
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
<h2 className="ms-3 p-4 mt-3">Add SubCategory here</h2>
<hr className="border border-1 border-dark w-50 ms-5" align="left" />
{/* add category here */}
<Form className='w-50 ms-5' onSubmit={handleSubmit}>

<div className='form-group mt-3'>
    <select ref={categoryInp}  placeholder='Enter Category Name *' className='form-control'>
      <option value="">-select Category-</option>
      {/* fetch dynamic added category here */}
      {data && data.map((item)=>{
        return(
            <>
            <option value={item.category}>{item.category}</option>
            </>
        )
      })}
    </select>
</div>
<div className='form-group mt-3'>
    <input ref={subcategoryInp} type='text' placeholder='Enter Subcategory Name *' className='form-control' />
</div>

<div className='form-group mt-3'>
    <textarea ref={subcategoryDescInp} type='text' placeholder='Enter Subcategory Descriptions *' className='form-control'></textarea>
</div>

<div className='form-group mt-3'>
    <input  type="date" ref={dateInp} placeholder='Enter added date *' className='form-control' />
</div>


<div className='form-group mt-3'>
<input type="submit" value="AddSubCategory"   className='btn btn-lg btn-dark text-white' />
</div>



</Form>
</div>
</div>
</div>
</section>
</div>
)
}
