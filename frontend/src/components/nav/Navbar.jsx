import React from 'react'
import "./navbar.css";
import { Link } from 'react-router-dom';
import { FaBookOpen } from "react-icons/fa6";
import {useSelector} from "react-redux";
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';
import axios from 'axios';
function Navbar() {
  const isLoggedIn= useSelector((state)=>state.isLoggedIn);
  const dispatch=useDispatch();
  const logout=async()=>{
    sessionStorage.clear("id");
  dispatch(authActions.logout());

  alert("Logout Successfully");
//  await axios.get("localhost:3000/home");
}
  return (
    <>
<nav className="navbar navbar-expand-lg">
  <div className="container">
    <Link className="navbar-brand" to="#">
<b>
<FaBookOpen /> &nbsp;
    TODO </b>

    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item mx-2">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link active" aria-current="page" to="/about">About us</Link>
        </li>
       {!isLoggedIn && <>
        <li className="nav-item mx-2">
          <Link className="nav-link active" aria-current="page" to="/todo">TODO</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link active btn-nav" aria-current="page" to="signup">Sign up</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link active btn-nav" aria-current="page" to="signin">Login</Link>
        </li>
       </>}
       {
        isLoggedIn && <>
 <li className="nav-item mx-2">
          <Link className="nav-link active btn-nav" aria-current="page" to="logout" onClick={logout}>Logout</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link active" aria-current="page" to="#">
            <img className='image-fluid user-png' src='https://cdn-icons-png.flaticon.com/512/219/219983.png' alt='userImage'/>
          </Link>
        </li>
        </>
       }
       
        </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar