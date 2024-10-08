import React,{useRef} from "react";
import { Form,Button,Container, Row } from "react-bootstrap";
import Swal from "sweetalert2";
function FormApp()
{
    const patientname=useRef("");
    const doctorname=useRef("");
    const deases=useRef("");
    const datetime=useRef("");
    const comment=useRef("");
    // addForm handeling with events function
    const AddFormHandel=(e)=>{
        e.preventDefault();
        var insert={

            patientname:patientname.current.value,
            doctorname:doctorname.current.value,
            deases:deases.current.value,
            datetime:datetime.current.value,
            comment:comment.current.value
            
        
        }
        // pass a message after submit form
        console.log(insert);
        Swal.fire({
            title: "Good job!",
            text: "Appointment successfully booked!",
            icon: "success"
          })
        e.target.reset();

    }
    return(
        <>
         <Container className="mt-5 p-5 shadow">
            <h1>Book Appointment</h1>
            <hr />
            <Row>
                <div className="col-md-4">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3q5iV8nPbVssvRktrg9ts9aVB2fs_JEvoFw&s" className="img-fluid" />
                </div>
                <div className="col-md-8">
                    <Form onSubmit={AddFormHandel}>
                        <div className="form-group mt-3">
                            <input type="text" ref={patientname} placeholder="Enter Patient Name *" className="form-control" />
                        </div>

                        
                        <div className="form-group mt-3">
                            <input type="text" ref={doctorname} placeholder="Enter Doctor Name *" className="form-control" />
                        </div>

                        
                        <div className="form-group mt-3">
                            <input type="text" ref={deases} placeholder="Enter Your Deases Name *" className="form-control" />
                        </div>

                        
                        <div className="form-group mt-3">
                            <input type="datetime-local" ref={datetime} placeholder="Enter Patient Name *" className="form-control" />
                        </div>

                        
                        <div className="form-group mt-3">
                            <textarea  ref={comment} placeholder="Enter your comment *" className="form-control" />
                            
                        </div>

                        
                        <div className="form-group mt-3">
                            <input type="submit" value="Book Appointment"  className="btn btn-dark text-white" />
                        </div>

                    </Form>
                </div>
            </Row>
         </Container>

        </>
    )
}
export default FormApp