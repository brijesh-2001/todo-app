import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ToastContainer,toast } from 'react-toastify';

function Update({display,update}) {
  useEffect(()=>{
    setInputs({
      title:update.title,
      body:update.body,
    });
      },[update])
  const [Inputs,setInputs]=useState(
    {title:"",
      body:"",
    }
  );
 
  const change=(e)=>{
const {name,value}=e.target;
setInputs({...Inputs,[name]:value})
  };
  const submit=async()=>{
    await axios.put(`http://localhost:1000/api/v2/updateTask/${update._id}`,Inputs).then((response)=>{
     toast.success("Your Task is Updated Successfully")
    // toast.success(response.data.message);
    });
    display("none")
  }
  return (
    <div className='p-5 d-flex justify-content-center
     align-items-start
     bg-primary 
     flex-column update'>
      <h3>Update Your Tasks</h3>
      <input type='text' className='todo-inputs my-4 w-100 p-3' 
      value={Inputs.title}
      onChange={change}
      name='title'
      />
      <textarea  className='todo-inputs w-100 p-3' 
      value={Inputs.body}
      onChange={change}
      name='body'/>
      <div>
      <button className='btn btn-dark my-4'  onClick={submit}>UPDATE</button>
      <button className='btn btn-dark danger mx-3 my-4 ' 
      onClick={()=> display("none")}>CLOSE</button>
      </div>
      
    </div>
  );
};

export default Update;