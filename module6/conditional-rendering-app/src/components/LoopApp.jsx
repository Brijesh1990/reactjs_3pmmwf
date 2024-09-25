import React from 'react'
const Data=[
{
    id:101,
    name:"brijesh"
 },
 {
 id:102,
name:"jayesh",

},
{
    id:103,
    name:"Prithvi"
 },
 {
 id:104,
name:"sameer",

},

{
    id:105,
    name:"jaypal"
 },
 {
 id:106,
name:"mukesh",

}



]
export default function LoopApp() {
  return (
    <div>

   {Data.filter((item, key) => key < 6).map((filteredItem) =>

   { 
     
       return(
        <>
            <div style={{width:"20%",height:"auto",float:"left",margin:"15px",padding:"25px",backgroundColor:"aqua"}}>
               
               <p> {filteredItem.id}</p>
               <p>{filteredItem.name}</p>

               
            </div>
        </>
       )
    
    })}
      
    </div>
  )
}
