import React from 'react';
import './Nav.css'

function Nav() {
  return (
    <>
    <div className='Nav flex items-center place-content-center'>
        <p className='what-is-happening'>What is happening in Diani</p>
    </div>
    <div className='semi-div flex justify-between'>
 
<div className='flex items-center'> <img src='/images/Arrow1.png' className='mx-2' /><p className='back'>Back</p></div>
 <p><img  className='back-list' src='/images/Group16.png'/></p>
    </div>
    </>
  )
}

export default Nav