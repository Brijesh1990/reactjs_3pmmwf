import React,{Component} from "react";
class Employee extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            id:1001,
            name:"brijesh"

        }
    }

    render()
    {
        return(
            <>
                <h1>employee name is :{this.props.name}</h1>
            </>
        )
    }
}

export default Employee