import React from 'react'
import './todo.css';
import { MdDeleteOutline ,MdOutlineBrowserUpdated} from "react-icons/md";
import Update  from './Update';

function TodoCards({title,body,id,delid,display,updateId, tobeUpdate}) {
  return (
    <div className='p-3 todo-card'>
        <div>
            <h5>
               {title}
            </h5>
            <p className='todocard-p'>
               {body}
            </p>
        </div>
        <div className='d-flex justify-content-around'>
        <div className='d-flex justify-content-center align-items-center card-icons-head px-2 py-1'
        onClick={()=>{
         display("block");
         tobeUpdate(updateId);
         
        }}>
        
        <MdOutlineBrowserUpdated className='card-icons '/> UPDATE
        </div>
        <div className=' del d-flex justify-content-center align-items-center card-icons-head px-2 py-1 text-danger ' 
        onClick={()=>(delid(id))}>
        <MdDeleteOutline className='card-icons-del' /> DELETE
        </div>
        </div>
        </div>
       
   
  )
}

export default TodoCards