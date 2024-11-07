import React, { useRef,useState,useEffect } from 'react'
import { Container} from 'react-bootstrap'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate,useParams } from 'react-router-dom';

export default function EditData() {
//  destructuring of data for update 
const[data,setData]=useState([]);
//stored all data in variables
const taskname=useRef("");
const addeddate=useRef("");
const users=useRef("");
const navigate=useNavigate();
const {id}=useParams();
// edit all data of users
useEffect(()=>{
// call api for fetch data for edit here
axios.get(`http://localhost:8000/tasks/${id}`).then((response)=>{
    setData(response.data);
    taskname.current.value=response.data.taskname;
    addeddate.current.value=response.data.addeddate;
    users.current.value=response.data.users
});

},[]);


// update data create a evenHandeler function

const updFormData=(e)=>{
e.preventDefault();
var upd={
    taskname:taskname.current.value,
    addeddate:addeddate.current.value,
    users:users.current.value,
}
// call api via axios.put()
axios.put(`http://localhost:8000/tasks/${id}`,upd).then(()=>{
  // pass a updated messages 
  Swal.fire({
    title: "Good job!",
    text: "Your task successfully added!",
    icon: "success"
  });
navigate('/');
})
}


  return (
    <div>
    <Container className='mt-5 p-4 w-50 shadow mx-auto'>
    <h1 className='fs-xl fs-4'>Update Task </h1>
      <form>
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

          <button type='button' onClick={updFormData}  className='btn btn-lg btn-dark text-white'>Update task</button>
      </form>

   
    </Container>
  </div>
  )
}
