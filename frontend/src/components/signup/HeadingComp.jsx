import React from 'react'

function HeadingComp({first, second}) {
  return (
    <div className='col-lg-4 column col-left d-flex justify-content-center align-items-center'>
            <h1 className='text-center sign-up-heading' >
              {first} 
              <br/> {second}
            </h1>
        </div>
  )
}

export default HeadingComp