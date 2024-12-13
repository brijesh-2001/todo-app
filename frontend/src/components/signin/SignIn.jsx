import React from 'react'
import HeadingComp from '../signup/HeadingComp'
import '../signup/signup.css';
import { useState } from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';
function SignIn() {
  const dispatch=useDispatch();
  const history=useNavigate();
  const [Inputs,setInputs]=useState({email:"",
   
    password:"",
  });

const change=(e)=>{
  const{name,value}=e.target;
  setInputs({...Inputs,[name]:value});
};
const submit=async (e)=>{
  e.preventDefault();
  await axios.post("http://localhost:1000/api/v1/signin",Inputs).then((response)=>{
  sessionStorage.setItem("id",response.data._id);
  dispatch(authActions.login());

  history("/todo");
    
  })
}
// const logout= async (e)=>{
//   e.preventDefault();
//   sessionStorage.clear();
//   dispatch(authActions.login());
//   // await axios.post(`http:localhost:1000/api/v1/home`,Inputs).then((response)=>{
//   // })
// }
  return (
   <>
   <div className='signup' >
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 column d-flex justify-content-center align-items-center'>
            <div className='d-flex w-100 p-5  flex-column'>
              <input type='email'
              placeholder='Enter your Email'
              className='p-2 my-3 input-signup'
              name='email'
              value={Inputs.email}
              onChange={change}/>
              
              <input type='password'
              placeholder='Enter your Password'
              className='p-2 my-3 input-signup'
              name='password'
              onChange={change}
              value={Inputs.password}/>
<button className='btn-signup p-2'onClick={submit}>Sign In</button>
            </div>
          </div>
          
         <HeadingComp first="Sign" second="In"/>
        </div>
      </div>
    </div>
   </>
  )
}

export default SignIn