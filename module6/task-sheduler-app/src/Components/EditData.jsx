import React, { useRef,useState,useEffect } from 'react'
import { Container} from 'react-bootstrap'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate,useParams } from 'react-router-dom';
const EditData = () => {
// destructuring of data 
const[edittask,setEditTask]=useState(0);
//stored all data in variables
const taskname=useRef("");
const addeddate=useRef("");
const users=useRef("");
const navigate=useNavigate();
const{id}=useParams();

// for edit display data
useEffect(()=>{
    // call api for edit data
    axios.get(`http://localhost:8000/tasks/${id}`).then((response)=>{
    setEditTask(response.data);
    taskname.current.value=response.data.taskname,
    addeddate.current.value=response.data.addeddate,
    users.current.value=response.data.users

    })
  

},[])

// update formHandeler function 
const updTaskHandeler=(e)=>
    {
        e.preventDefault();
        var data={
            taskname:taskname.current.value,
            addeddate:addeddate.current.value,
            users:users.current.value
        }
        // call api using axios.post() to add data in db.json

        axios.put(`http://localhost:8000/tasks/${id}`,data).then(()=>{
            // pass a messages
            Swal.fire({
                title: "Good job!",
                text: "Your task successfully updated!",
                icon: "success"
              });

              navigate('/');

          

        })

    } 
  return (
    <div>
      <Container className='mt-5 p-4 w-50 shadow mx-auto'>
      <h1 className='fs-xl fs-4'>Edit Task  </h1>
        <form>
          <label className='text-success'>Edit taskName *</label>
            <input type='text' ref={taskname} placeholder='Enter a Task' className='form-control mt-2' />
            <br />


            <label className='text-success'>Edit taskDate *</label>
            <input type='date' ref={addeddate} placeholder='dd/mm/yy' className='form-control mt-2' />
            <br />


            <label className='text-success'>Edit Users *</label>
            <select ref={users} placeholder='Enter a Task' className='form-control mt-2'>
                <option value="brijesh">Brijesh</option>
                <option value="sameer">Sameer</option>
                <option value="krishna">Krishna</option>
            </select>
            <br />

            <button type='button' onClick={updTaskHandeler} className='btn btn-lg btn-dark text-white'>Update Task</button>
        </form>

     
      </Container>
    </div>
  )
}

export default EditData
