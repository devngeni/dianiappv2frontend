import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

function Nav({backPath}) {
  return (
    <>
    <div className='Nav flex items-center place-content-center'>
        <p className='what-is-happening'>What is happening in Diani</p>
    </div>
    <div className='semi-div flex justify-between items-center'>
 
<Link to={backPath}><div className='flex items-center'> <img src='/images/Arrow1.png' className='mx-2' /><p className='back'>Back</p></div></Link>
 <p><img  className='back-list' src='/images/Group16.png'/></p>
    </div>
    </>
  )
}

export default Nav