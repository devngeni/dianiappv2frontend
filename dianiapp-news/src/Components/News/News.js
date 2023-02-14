import React from 'react';
import './News.css'
import NewsLayout from './NewsLayout';

function News() {
  return (
    <div className='News'>
        <NewsLayout />
        <NewsLayout />
        <NewsLayout />
        <NewsLayout />
    </div>
  )
}

export default News