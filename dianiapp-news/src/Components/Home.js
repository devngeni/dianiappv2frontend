import React from 'react'
import Nav from './Nav/Nav.js';
import './Home.css'
import News from './News/News.js';

function Home({backPath}) {
  return (
    <div className='Home'>
        <Nav backPath={backPath} />
        <News />
    </div>
  )
}

export default Home