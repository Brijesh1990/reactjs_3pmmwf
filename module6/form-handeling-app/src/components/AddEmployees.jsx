import React,{useRef} from "react";
import { Container,Form } from "react-bootstrap";
import Swal from "sweetalert2";
// uncontrolled components form handeling :if we used to handel any form data using components of input data using useRef that is called uncontrolled components formHandeling
function AddEmployees()
{
        // input will stored via ref or useRef()
        const name=useRef("");
        const email=useRef("");
        const phone=useRef("");
        const address=useRef("");
        // each variable stored in current values of data using useRef

        const handelSubmit=(e)=>{
        e.preventDefault();    
        var insert={    
        name:name.current.value,
        email:email.current.value,
        phone:phone.current.value,
        address:address.current.value
        }
        console.log(insert);
        Swal.fire({
            title: "Good job!",
            text: "Form submitted successfully!",
            icon: "success"
          }); 

          e.target.reset();

        }


    
    return (
        <>
         <Container className="w-50 shadow mt=5 p-5 mx-auto">
         <Form onSubmit={handelSubmit}>

         <div className="form-group">  
         <label>Email *</label>
         <input type="text" ref={email} placeholder="Email" className="form-control" />
         </div>  

         <div className="form-group mt-4">  
         <label>Name *</label>
         <input type="text" ref={name} placeholder="Name"  className="form-control" />
         </div>  

         <div className="form-group mt-4">  
         <label>Phone *</label>
         <input type="text" ref={phone} placeholder="Email"  className="form-control" />
         </div>  

         <div className="form-group mt-4">  
         <label>Address *</label>
         <input type="text" ref={address} placeholder="Address"  className="form-control" />
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

export default AddEmployees