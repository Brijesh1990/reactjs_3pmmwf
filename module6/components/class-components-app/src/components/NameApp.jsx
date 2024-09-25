import React,{Component} from "react";
class NameApp extends Component
{
    render(){
        return(
            <>

             <h1>My name is Brijesh</h1>

            </>
        )
    }
}

class TeacherApp extends NameApp 
{
    render(){
        return(
            <>
                <NameApp />
                <h2>The teachers name is Mr. Krishna Kumar</h2>
            </>
        )
    }
}

export default TeacherApp