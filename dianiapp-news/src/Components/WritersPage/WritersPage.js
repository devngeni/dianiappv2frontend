import React from 'react';
import './WritersPage.css';
import Nav from '../Nav/Nav'

function WritersPage({backPath}) {
  return (
<div>
    <Nav backPath={backPath} />
<div className='WritersPage'>
<form>
    <div className='Input-div-news-j grid mx-auto py-4'>
        <label>Title</label>
        <input type='text'/>
    </div>
    <div className='Input-div-news-j grid mx-auto py-4'>
        <label>Image</label>
        <input type="file" id="img" name="img" accept="image/*"/>
    </div>
    <div className='Input-div-news-j grid mx-auto py-4'>
        <label>Content</label>
        <textarea type='text'></textarea>
    </div>


    <div className='py-4'>
        <input type='submit' className='submit-button-j'  value='Post'/>
    </div>
</form>
    </div>
</div>
  )
}

export default WritersPage