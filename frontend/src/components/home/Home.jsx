import React from 'react'
import "./home.css"

function Home() {
    
    return (
        <div className='home d-flex justify-content-center align-items-center'>
            <div className='container  d-flex justify-content-center align-items-center flex-column '>
                <h1 className='text-center'>
                    Oragnise your tasks <br />
                    Work and Life
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sunt quod nisi voluptate quam totam similique aspernatur.
                    <br/>
                     Aperiam architecto facere cupiditate excepturi reprehenderit temporibus 
                      us!
                </p>
                <button className='home-btn'>Make Your Todo List</button>
            </div>
        </div>
    )
}

export default Home