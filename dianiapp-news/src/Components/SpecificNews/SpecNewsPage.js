import React from 'react'
import Nav from '../Nav/Nav'
import SpecificNews from './SpecificNews'

function SpecNewsPage({backPath}) {
  return (
    <div>
        <Nav backPath={backPath}/>
        <SpecificNews />
    </div>
  )
}

export default SpecNewsPage