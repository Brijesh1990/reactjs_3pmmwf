import React,{useState} from "react";
import { Container,Row,Form,Button } from "react-bootstrap";
import adempimg from '../assets/images/emp.gif'
import Swal from "sweetalert2";
// uncontrolled components form handeling :is used to handel form data using useRef hooks to manage form data i.e called uncontrolled form handeling components 

function AddEmployee()
{
const[name,setName]=useState('');    
// used controlled components form handeling
// applied destructuring of data
const[data,setData]=useState({
empname:"",
empemail:"",
empage:"",
empsalary:"",
empcode:"",
empaddress:"",
compname:""
});

//add form validations create destructuring for form validations
const[errors,setErrors]=useState({}); 
const validate=()=>{
const errors={};
if(!data.empname)
{
errors.empname="Please Enter your employeename here";
}
if(!data.empemail)
{
errors.empemail="Please Enter your  email here";
}
if(!data.empage)
{
errors.empage="Please Enter your age here";
}
if(!data.empsalary)
{
errors.empsalary="Please Enter your salary here";
}
if(!data.empcode)
{
errors.empcode="Please Enter your employecode here";
}
if(!data.empaddress)
{
errors.empaddress="Please Enter your Address here";
}
if(!data.compname)
{
errors.compname="Please Enter your company Name here";
}

return errors;

}

const OnChangeForm=(e)=>{
const{name,value}=e.target;
setData({
...data,
[name]:value

});


}
const onFormSubmit=(e)=>
{
e.preventDefault();
// pass cvalidations rules after submit form
const errors=validate();
if(Object.keys(errors).length===0)
{    

console.log("you are successfully added employees",data);
Swal.fire({
title: "Good job!",
text: "You clicked the button!",
icon: "success"
});
// e.target.reset();
window.location.href="";

}
else 
{
 setErrors(errors);
}
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
{errors.empname && <p style={{color:"red"}}>{errors.empname}</p>}

</div>


<div className="form-group mt-3">
<input type="text" name="empemail" value={data.empemail} onChange={OnChangeForm} placeholder="Employee Email *" className="form-control" />
{errors.empemail && <p style={{color:"red"}}>{errors.empemail}</p>}
</div>


<div className="form-group mt-3">
<input type="text" name="empage" placeholder="Employee Age*" value={data.empage} onChange={OnChangeForm} className="form-control" />
{errors.empage && <p style={{color:"red"}}>{errors.empage}</p>}
</div>


<div className="form-group mt-3">
<input type="text" name="empsalary" placeholder="Employee Salary *" value={data.empsalary} onChange={OnChangeForm} className="form-control" />
{errors.empsalary && <p style={{color:"red"}}>{errors.empsalary}</p>}
</div>


<div className="form-group mt-3">
<input type="text" name="empcode" placeholder="Employee Code *" value={data.empcode} onChange={OnChangeForm} className="form-control" />
{errors.empcode && <p style={{color:"red"}}>{errors.empcode}</p>}
</div>


<div className="form-group mt-3">
<input type="text" name="empaddress" value={data.empaddress} onChange={OnChangeForm} placeholder="Employee Address *" className="form-control" />
{errors.empaddress && <p style={{color:"red"}}>{errors.empaddress}</p>}
</div>


<div className="form-group mt-3">
<input type="text" name="compname" value={data.compname} onChange={OnChangeForm} placeholder="Employee Company name *" className="form-control" />
{errors.compname && <p style={{color:"red"}}>{errors.compname}</p>}
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