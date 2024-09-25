import React,{Component} from "react";
class Employee extends Component 
{
    constructor(props)
    {
        super(props);
        this.state={
            "name":"Brijesh",
            "age":35,
            "mobile":91241221,
            "salary":101
        }
       
    }
    render()
    {
        return(
            <>
            <h1>The details of employee is :{this.state.name}</h1>
            <h1>The details of age is :{this.state.age}</h1>
            <h1>The details of mobile is :{this.state.mobile}</h1>
            <h1>The details of salary is :{this.state.salary}</h1>
           
            </>
             )
    }
}

export default Employee