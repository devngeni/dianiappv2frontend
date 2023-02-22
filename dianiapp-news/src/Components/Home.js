import React from 'react'
import Nav from './Nav/Nav.js';
import './Home.css'
import News from './News/News.js';

function Home({backPath,news}) {
  return (
    <div className='Home'>
        <Nav backPath={backPath} />
        <News news={news} />
    </div>
  )
}

export default Home