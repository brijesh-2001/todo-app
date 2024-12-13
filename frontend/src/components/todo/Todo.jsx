import React, {useEffect, useState } from 'react'
import'./todo.css'

import TodoCards from './TodoCards'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
  import 'react-toastify/dist/ReactToastify.css';

import Update  from './Update';
let toUpdateArray=[];
let id=(sessionStorage.getItem("id"));
function Todo() {
  const[input,setInput]=useState({title:"",body:""})
  const[Array,setArray]=useState([])

 

  const show=()=>{
    document.getElementById("textarea").style.display="block"
  }
  const change=(e)=>{
const{name,value}=e.target;
setInput({...input,[name]:value});

  }

  const submit=async ()=>{
if(input.title==="" || input.body===""){
  toast.error("Title or body cannot be empty");
}
else{
  if(id){
    await axios.post(`http://localhost:1000/api/v2/addTask`,
      {
      title:input.title,
      body:input.body,
      id:id}).then((response)=>{
      console.log(response);
    });
    
    setInput({title:"",body:""});
    toast.success("Your Task is Added Successfully");
  
   }
   else{
    setArray([...Array,input]);
    setInput({title:"",body:""});
    toast.success("Your Task is Added Successfully");
    toast.error("Your task is not saved please login");
   }
   
   }
};
  const del=async (Cardid)=>{
    if(id){
      // console.log(id);
// Array.splice(id,"1");
// setArray([...Array]);
await axios.delete(`http://localhost:1000/api/v2/deleteTask/${Cardid}`,{data:{id:id},}).then((response)=>{
  // console.log(response.data)
  toast.success("Your Task is Deleted Successfully");
  
});
    }
    else{
      toast.error("Please Sign Up First");
    }

  };
  const dis=(value)=>{
    document.getElementById("todo-update").style.display=value;
  }
  const update=(value)=>{
    toUpdateArray=Array[value];
  }
  useEffect(()=>{
    if(id){
      const fetch=async()=>{
        await axios.get(`http://localhost:1000/api/v2/getTasks/${id}`)
        .then((response)=>{
          setArray(response.data.list);
        });
      }
      fetch();
    }
    
      },[submit]);   
 
  return (
    <>
    <div className='todo'>
      <ToastContainer/>
      <div className='todo-main-container d-flex justify-content-center align-items-center flex-column'>
       <div className='d-flex flex-column todo-inputs-div w-50 p-1 '>
        <input 
        type='text' 
        placeholder='title' 
        className='p-2 my-3 todo-inputs'
         onClick={show}
         name='title'
         value={input.title}
         onChange={change}/>

        <textarea id="textarea" 
        type='text' 
        placeholder='body' 
        className='p-2 todo-inputs'
        name='body'
        onChange={change}
        value={input.body}/>
        </div>
        <div className='w-50 d-flex justify-content-end'>
        <button className='home-btn px-2 py-1 my-2' onClick={submit}> ADD</button>
        </div>
      </div>
      <div className='todo-body'>
        <div className='container-fluid'>
          <div className='row '>
           
          {Array 
          && 
          Array.map((item,index)=> 
          (<div className=' col-lg-3 col-10 mx-5 my-2' key={index}>
            <TodoCards title={item.title} body={item.body} 
            id={item._id} 
            delid={del}
            display={dis}
            updateId={index}
            tobeUpdate={update}/> </div>
          ))}
          </div>
          
        </div>
      </div>
    </div>
<div className='todo-update ' id='todo-update'>
  <div className="container update" >
  {""}
  <Update  display={dis} update={toUpdateArray}/>
  </div>
  

</div>
    </>
  )
}

export default Todo