import React,{useState,useEffect} from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Footer from './components/Footer'
export default function Layout() {
//initialized aos lib
 
// applied lazy loaders 
//destructuring for lazy loader
const[loader,setLoader]=useState(true);
useEffect(()=>{
setTimeout(()=>{
setLoader(false);
},3500);
},[]);
return (
loader ?
<>
<>
<div style={{width:"50%", height:"auto",margin:"auto", marginTop:"8%"}}>
<div className="spinner-grow text-primary mx-auto mt-5" role="status" style={{width:"8rem",height:"8rem"}}>
<span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-secondary" role="status" style={{width:"8rem",height:"8rem"}}>
<span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-success" role="status" style={{width:"8rem",height:"8rem"}}>
<span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-danger" role="status" style={{width:"8rem",height:"8rem"}}>
<span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-warning" role="status" style={{width:"8rem",height:"8rem"}}>
<span className="visually-hidden">Loading...</span>
</div>
</div>
</>
</> 
:
<div>
<Header />
<Navbar />
<Content />
<Footer />
</div>
)
}
