import React,{useState} from "react";
function Employees()
{
const[data,setData]=useState({
id:101,
name:"brijesh kumar pandey",
age:35,
address:"150 feet ring road rajkot"
})
//     const[data,setData]=useState([{
//         id:101,
//         name:"brijesh kumar pandey",
//         age:35,
//         address:"150 feet ring road rajkot"
//     },
//     {
//     id:102,
//     name:"Rahul Tripathi",
//     age:25,
//     address:"150 feet ring road rajkot"
//     },

//     {
//     id:103,
//     name:"Sameer patel",
//     age:38,
//     address:"near cg road ahemdbad"
// },



// ])

// create a function 
const UpdData=()=>{
//e.preventDefault();

setData({

id:102,
name:"Rahul kumar patel",
age:25,
address:"Near CG road rajkot 360005"

})


}

return (
<>
<h1>The details of Employees id is :<b>{data.id} </b> <br/> Employees name is :<b>{data.name}</b>  <br /> Employees age is :<b>{data.age}</b> <br/> Employees address is : <b>{data.address}</b></h1>

<h2><button type="button" onClick={()=>UpdData()} style={{backgroundColor:"black",color:"white"}}>Click for Update</button></h2>
</>
)
}

export default Employees