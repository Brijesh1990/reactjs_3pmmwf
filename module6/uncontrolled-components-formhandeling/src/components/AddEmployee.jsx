import React,{useRef} from "react";
import { Container,Row,Form,Button } from "react-bootstrap";
import adempimg from '../assets/images/emp.gif'
import Swal from "sweetalert2";
// uncontrolled components form handeling :is used to handel form data using useRef hooks to manage form data i.e called uncontrolled form handeling components 

function AddEmployee()
{
    
    // used uncontrolled components form handeling
    const empname=useRef("");
    const empemail=useRef("");
    const empage=useRef("");
    const empsalary=useRef("");
    const empcode=useRef("");
    const empaddress=useRef("");
    const compname=useRef("");
    //applied formHandeling create a function 
    
    const AddFormSubmit=(e)=>{
        e.preventDefault();
     var insert={
          
        empname:empname.current.value,
        empemail:empemail.current.value,
        empage:empage.current.value,
        empsalary:empsalary.current.value,
        empcode:empcode.current.value,
        empaddress:empaddress.current.value,
        compname:compname.current.value

     }      
    //  print the values 
     console.log(insert);
    //  pass a sweet alert message
    Swal.fire({
        title: "Good job!",
        text: "Thanks for adding employees Data!",
        icon: "success"
      });

      e.target.reset();
     

    }

    return(
        <>
        <Container className="p-5 mt-5 shadow">
            <Row>
                <div className="col-md-4">
                    <img src={adempimg} className="img-fluid" />
                </div>
                <div className="col-md-8">
                <Form onSubmit={AddFormSubmit}>
                <div className="form-group mt-3">
                <input type="text" ref={empname} placeholder="Employee Name *" className="form-control" />
                </div>

                
                <div className="form-group mt-3">
                <input type="text" ref={empemail} placeholder="Employee Email *" className="form-control" />
                </div>

                
                <div className="form-group mt-3">
                <input type="text" ref={empage} placeholder="Employee Age*" className="form-control" />
                </div>

                
                <div className="form-group mt-3">
                <input type="text" ref={empsalary} placeholder="Employee Salary *" className="form-control" />
                </div>

                
                <div className="form-group mt-3">
                <input type="text" ref={empcode} placeholder="Employee Code *" className="form-control" />
                </div>

                
                <div className="form-group mt-3">
                <input type="text" ref={empaddress} placeholder="Employee Address *" className="form-control" />
                </div>

                
                <div className="form-group mt-3">
                <input type="text" ref={compname} placeholder="Employee Company name *" className="form-control" />
                </div>


                
                <div className="form-group mt-3">
                <input type="submit"  value="Addemployee" className="btn btn-dark text-white btn-lg" />
                </div>
                </Form>

                </div>
            </Row>
        </Container>

        </>
    )
}

export default AddEmployee