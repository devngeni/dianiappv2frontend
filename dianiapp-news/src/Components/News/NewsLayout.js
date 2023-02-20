import React from 'react';
import './News.css'

function NewsLayout({newsObject}) {
  return (
    <div className='NewsLayout'>
   <div className='news-img items-center flex'><img src={newsObject.image} className='news-img-spec'/></div>
   <div className='news-content'>
    <div className='topic '>{newsObject.title}</div>
    <div className='content font-light'>Lorem ipsum dolor sit amet consectetur. In vulputate ultrices eu netus condimentum commodo nulla sollicitudin. Faucibus eget amet diam feugiat at tempus enim. </div>
    <div className='flex date'><p>24th Jan </p> <p> <span>.</span>10:58pm</p></div>
   </div>
    </div>
  )
}

export default NewsLayout