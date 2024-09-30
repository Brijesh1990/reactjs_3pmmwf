import React,{Component,useState} from 'react'
class Employee extends Component
{
    constructor(props)
    {
        super(props);

        // destructuring of state  
        const[data,setDtata]=useState("Brijesh kumar pandey");

        this.state={
            id:1,
            name:"brijesh", 
        }
    }

    render()
    {
        return(
            <>
                <h1>The name os Employee :{this.props.name}</h1>
                <h2>The name of users {this.state.data}</h2>
            </>
        )
    }
}

export default Employee