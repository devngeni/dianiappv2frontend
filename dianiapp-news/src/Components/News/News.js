import React from 'react';
import { Link } from 'react-router-dom';
import './News.css'
import NewsLayout from './NewsLayout';
import { newjson } from '../New';

function News({news}) {
  return (
    <div className='News'>
      {news.map((newsObject)=>(
        <div key={newsObject.id}>
          <Link to={`/news/${newsObject._id}`} >
        <NewsLayout newsObject={newsObject}  />
        </Link>
        </div>
      ))}
    </div>
  )
}

export default News