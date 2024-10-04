import React,{useState} from "react";
import { Container,Row,Form,Button } from "react-bootstrap";
import adempimg from '../assets/images/emp.gif'
function AddForm()
{
    const [name, setName] = useState("");

    // create a controlled components form Handeling 
    return(
        <>
        <Container className="p-5 mt-5 shadow">
            <Row>
                <div className="col-md-4">
                    <img src={adempimg} className="img-fluid" />
                </div>
                <div className="col-md-8">
                <Form>
                <div className="form-group mt-3">
                <input type="text" name="empname"  placeholder="Employee Name *" className="form-control" />
                </div>

                
                <div className="form-group mt-3">
                <input type="text" name="empemail"  placeholder="Employee Email *" className="form-control" />
                </div>

                
                <div className="form-group mt-3">
                <input type="text" name="empage" placeholder="Employee Age*"  className="form-control" />
                </div>

                
                <div className="form-group mt-3">
                <input type="text" name="empsalary" placeholder="Employee Salary *"  className="form-control" />
                </div>

                
                <div className="form-group mt-3">
                <input type="text" name="empcode" placeholder="Employee Code *"  className="form-control" />
                </div>

                
                <div className="form-group mt-3">
                <input type="text" name="empaddress"  placeholder="Employee Address *" className="form-control" />
                </div>

                
                <div className="form-group mt-3">
                <input type="text" name="compname"  placeholder="Employee Company name *" className="form-control" />
                </div>


                
                <div className="form-group mt-3">
                <input type="submit"  value="Addemployee" className="btn btn-dark text-white btn-lg" />

                <button type="reset"  className="btn ms-4 btn-dark text-white btn-lg" onClick={()=>setName('')}>Reset</button>
                </div>
                </Form>

                </div>
            </Row>
        </Container>

        </>
    )
}

export default AddForm