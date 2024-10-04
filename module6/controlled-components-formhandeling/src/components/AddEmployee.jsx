import React,{useState} from "react";
import { Container,Row,Form,Button } from "react-bootstrap";
import adempimg from '../assets/images/emp.gif'
import Swal from "sweetalert2";
// uncontrolled components form handeling :is used to handel form data using useRef hooks to manage form data i.e called uncontrolled form handeling components 

function AddEmployee()
{
    // used controlled components form handeling
    // applied destructuring of data
    const [name, setName] = useState("");
    const[data,setData]=useState({
       empname:"",
       empemail:"",
       empage:"",
       empsalary:"",
       empcode:"",
       empaddress:"",
       compname:""
    });

const OnChangeForm=(e)=>{

    const{name,value}=e.target;
    setData({
        ...data,
        [name]:value

    });
      

}
const onFormSubmit=(e)=>{
    e.preventDefault();
    console.log(data);
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });

    //   window.location.href="/";

}



    // create a controlled components form Handeling 
    return(
        <>
        <Container className="p-5 mt-5 shadow">
            <Row>
                <div className="col-md-4">
                    <img src={adempimg} className="img-fluid" />
                </div>
                <div className="col-md-8">
                <Form onSubmit={onFormSubmit}>
                <div className="form-group mt-3">
                <input type="text" name="empname" value={data.empname} onChange={OnChangeForm} placeholder="Employee Name *" className="form-control" />
                </div>

                
                <div className="form-group mt-3">
                <input type="text" name="empemail" value={data.empemail} onChange={OnChangeForm} placeholder="Employee Email *" className="form-control" />
                </div>

                
                <div className="form-group mt-3">
                <input type="text" name="empage" placeholder="Employee Age*" value={data.empage} onChange={OnChangeForm} className="form-control" />
                </div>

                
                <div className="form-group mt-3">
                <input type="text" name="empsalary" placeholder="Employee Salary *" value={data.empsalary} onChange={OnChangeForm} className="form-control" />
                </div>

                
                <div className="form-group mt-3">
                <input type="text" name="empcode" placeholder="Employee Code *" value={data.empcode} onChange={OnChangeForm} className="form-control" />
                </div>

                
                <div className="form-group mt-3">
                <input type="text" name="empaddress" value={data.empaddress} onChange={OnChangeForm} placeholder="Employee Address *" className="form-control" />
                </div>

                
                <div className="form-group mt-3">
                <input type="text" name="compname" value={data.compname} onChange={OnChangeForm} placeholder="Employee Company name *" className="form-control" />
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

export default AddEmployee