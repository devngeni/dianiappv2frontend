import React from 'react'
import Nav from './Nav/Nav.js';
import './Home.css'
import News from './News/News.js';

function Home() {
  return (
    <div className='Home'>
        <Nav />
        <News />
    </div>
  )
}

export default Home