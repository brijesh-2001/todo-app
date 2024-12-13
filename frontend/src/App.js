import React, { useEffect } from 'react'
import Navbar from './components/nav/Navbar'
import Home from'./components/home/Home';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Todo from './components/todo/Todo';
import SignUp from './components/signup/SignUp'
import SignIn from './components/signin/SignIn'
import LogOut from './components/logout/Logout'
import Update from './components/todo/Update';
import { useDispatch } from 'react-redux';
import { authActions } from './store';

function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
const id=(sessionStorage.getItem("id"));
if(id){
dispatch(authActions.login());
}},[])
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route  path='/home' element={<Home/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/signup' element={<SignUp/>}/>
        <Route  path='/signin' element={<SignIn/>}/>
        <Route  path='/logout' element={<LogOut/>}/>
        <Route  path='/todo' element={<Todo/>}/>
        {/* <Route  path='/update' element={<Update/>}/> */}
       
      </Routes>
    </Router>
    <Footer/>



    </>
  );
};
export default App