import React from 'react';
import { Link } from 'react-router-dom';
import './News.css'
import NewsLayout from './NewsLayout';
import { newjson } from '../New';

function News() {
  return (
    <div className='News'>
      <Link to='/news'>  <NewsLayout /></Link>
        <NewsLayout />
        <NewsLayout />
        <NewsLayout />
    </div>
  )
}

export default News