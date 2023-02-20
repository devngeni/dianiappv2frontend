import React from 'react'
import Nav from '../Nav/Nav';
import'./SpecificNews.css'

function SpecificNews({post}) {
   console.log(post)
  return (
 <>
 {/* {post.map((poster)=>( */}
      <div className='SpecificNews' key={post._id}>
      <div className='spec-topic px-4 py-2 '>   {post.title}</div>
       <div className='flex spec-date px-4 py-1 items-center'>24th Jan  <div className='dot mx-1 ml-1'></div>10:58pm</div>

   <div className='spec-news flex justify-start items-center py-4'>
       <img src={post.image} className='spec-img  flex justify-start'/>
   </div>
   <div className='spec-content py-3'>
   <p>{post.description} </p>
   </div>


   <div className='More-reads'>
{/* More reads */}
   <p className='text-gray-400 italic font-light w-full flex justify-start py-4'>More reads ...</p>


   <div className='coming-up'>
<p className='coming-up-topic py-2'>Avril is coming to Dianni</p>
<p className='itaic coming-up-content pb-4'>This weekend the most known Music star will be performing live at SunDowner retra elementum aliquam tellus mauris sit volutp...</p>
   </div>

   <div className='coming-up'>
<p className='coming-up-topic py-2'>Avril is coming to Dianni</p>
<p className='itaic coming-up-content pb-4'>This weekend the most known Music star will be performing live at SunDowner retra elementum aliquam tellus mauris sit volutp...</p>
   </div>
   </div>
   </div>
 {/* ))} */}
 </>
  )
}

export default SpecificNews