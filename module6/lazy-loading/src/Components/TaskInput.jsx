import React, { useRef,useState,useEffect } from 'react'
import { Container} from 'react-bootstrap'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// axios : axios is a external module of libraries that is used to call api using its methods.
// we can used axios to performed crud operation in api 
// axios provides some methods get | post | put | delete | update 
// axios.post() => add data 
// axios.get() => manage data
// axios.put() => update data
// axios.delete()=> delete data
const TaskInput = () => {
// destructuring of data 
const[task,setTask]=useState(0);
//destructuring for lazy loader
const[loader,setLoader]=useState(true);
useEffect(()=>{
setTimeout(()=>{
  setLoader(false);
},3500);
},[]);
// for diplay data
useEffect(()=>{
    // call api
    axios.get(`http://localhost:8000/tasks`).then((response)=>{

        setTask(response.data);
    })
  

},[task])

//stored all data in variables
const taskname=useRef("");
const addeddate=useRef("");
const users=useRef("");
const navigate=useNavigate();
// add formHandeler function 
const addTaskHandeler=(e)=>
    {
        e.preventDefault();
        var data={
            taskname:taskname.current.value,
            addeddate:addeddate.current.value,
            users:users.current.value
        }
        // call api using axios.post() to add data in db.json

        axios.post(`http://localhost:8000/tasks`,data).then(()=>{
            // pass a messages
            Swal.fire({
                title: "Good job!",
                text: "Your task successfully added!",
                icon: "success"
              });

            //   navigate('/');

            // clear the values
            e.target.reset();

        })

    } 
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
      <Container className='mt-5 p-4 w-50 shadow mx-auto'>
      <h1 className='fs-xl fs-4'>Add Task   <button type="button" className='border border-0 bg-light float-end'>Total Added Task :<span className='badge badge-sm bg-danger'>{task.length}</span></button></h1>
        <form onSubmit={addTaskHandeler}>
            <input type='text' ref={taskname} placeholder='Enter a Task' className='form-control mt-2' />
            <br />

            <input type='date' ref={addeddate} placeholder='dd/mm/yy' className='form-control mt-2' />
            <br />

            <select ref={users} placeholder='Enter a Task' className='form-control mt-2'>
                <option value="brijesh">Brijesh</option>
                <option value="sameer">Sameer</option>
                <option value="krishna">Krishna</option>
            </select>
            <br />

            <input type='submit' value="Add task" className='btn btn-lg btn-dark text-white' />
        </form>

        {/* display a data */}

        <table className='table table-responsive w-100 table-stripped table-hover table-bordered mt-5 p-5'>
            {task && task.map((item)=>{
                return (
                    <>
                    <tr>
                    <td>{item.taskname}</td>
                    <td>{item.addeddate}</td>
                    <td>{item.users}</td>
                  
                    
                    <td><button type='button' onClick={()=>{navigate(`/delete-data/${item.id}`)}} className='btn btn-sm btn-danger text-white bg-danger'><span className='bi bi-trash'></span></button>
                    
                    | <button type='button' onClick={()=>{navigate(`/edit-data/${item.id}`)}} className='btn btn-sm btn-danger text-white bg-primary'><span className='bi bi-pencil'></span></button>
                    
                    </td>
                    </tr>
                    </>
                )
            })}
          
        </table>
      </Container>
    </div>
  )
}

export default TaskInput
