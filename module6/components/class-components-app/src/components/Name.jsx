import React,{Component} from "react";
class Name extends Component 
{
    constructor(props)
    {
        super(props);
        this.state={name:'Brijesh'}
        

    }
    render()
    {
        return(
            <>
                <h1>My name is :{this.state.name}</h1>
            </>
        )
    }
}

export default Name