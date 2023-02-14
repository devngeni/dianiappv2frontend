import React from 'react'
import Nav from '../Nav/Nav';
import'./SpecificNews.css'

function SpecificNews() {
  return (
    <div className='SpecificNews'>
       <div className='spec-topic px-4 py-2 '>   Avril is Coming</div>
        <div className='flex spec-date px-4 py-1 items-center'>24th Jan  <div className='dot mx-1 ml-1'></div>10:58pm</div>

    <div className='spec-news flex justify-start items-center py-4'>
        <img src='/images/news.png' className='spec-img  flex justify-start'/>
    </div>
    <div className='spec-content py-3'>
    <p>Lorem ipsum dolor sit amet consectetur. Pulvinar id mi dolor sit diam phasellus convallis. Ut eros erat ut amet vel id nec. Etiam odio neque maecenas orci justo vel parturient commodo id. Malesuada ut eu ullamcorper dignissim sed morbi. Quam sem faucibus ullamcorper commodo natoque erat diam dui. Dictumst sit diam vulputate facilisis id vestibulum turpis. Hendrerit lorem pharetra elementum aliquam tellus mauris sit volutpat.
     Elit faucibus odio consectetur feugiat pretium quis elit. Dignissim habitasse mattis in egestas ultrices lorem morbi. Eu pellentesque ornare nulla nibh nulla neque posuere nisi. Nisl auctor vitae orci
     Lorem ipsum dolor sit amet consectetur. Pulvinar id mi dolor sit diam phasellus convallis. Ut eros erat ut amet vel id nec. Etiam odio neque maecenas orci justo vel parturient commodo id. Malesuada ut eu ullamcorper dignissim sed morbi. Quam sem faucibus ullamcorper commodo natoque erat diam dui. Dictumst sit diam vulputate facilisis id vestibulum turpis. Hendrerit lorem pharetra elementum aliqu.</p>
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
  )
}

export default SpecificNews