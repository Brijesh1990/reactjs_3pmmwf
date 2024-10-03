import React,{useState} from "react";
import { Container,Form } from "react-bootstrap";
import Swal from "sweetalert2";
// controlled components form handeling :if we used to handel any form data usingcomponents useState that is called controlled components formHandeling

function AddEmployee()
{
    const[data,setData]=useState({
        email:'',
        name:'',
        phone:'',
        address:''

    })

    // create an function for handel input change
    const handelChange=(e)=>{
        const{name,value}=e.target;
        setData({
           ...data,
           [name]:value,
          
        });

       
    }

    // create an function for handel submit Form
    const handelSubmit=(e)=>{
        e.preventDefault();
        // e.target.reset();
        //  e.target.location('/');  
        // window.location.href="/";  
        console.log(data);
        // pass a message
        Swal.fire({
            title: "Good job!",
            text: "Form submitted successfully!",
            icon: "success"
          });

        //   e.target.reset();
        
        
    }
    return (
        <>
         <Container className="w-50 shadow mt=5 p-5 mx-auto">
         <Form onSubmit={handelSubmit}>

         <div className="form-group">  
         <label>Email *</label>
         <input type="text" name="email" placeholder="Email" value={data.email} onChange={handelChange} className="form-control" />
         </div>  

         <div className="form-group mt-4">  
         <label>Name *</label>
         <input type="text" name="name" placeholder="Name" value={data.name} onChange={handelChange} className="form-control" />
         </div>  

         <div className="form-group mt-4">  
         <label>Phone *</label>
         <input type="text" name="phone" placeholder="Email" value={data.phone} onChange={handelChange} className="form-control" />
         </div>  

         <div className="form-group mt-4">  
         <label>Address *</label>
         <input type="text" name="address" placeholder="Address" value={data.address} onChange={handelChange} className="form-control" />
         </div>  
        
         <div className="form-group mt-4">  
         <button type="submit"  className="btn btn-sm btn-dark text-white">Register here</button>

         <input type="reset"  className="btn btn-sm ms-2 btn-danger text-white" value="Reset" />
         </div>  
         
         
         
         </Form>

         </Container>

        </>
    )
}

export default AddEmployee