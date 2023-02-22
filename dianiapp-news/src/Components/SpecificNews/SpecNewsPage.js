import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../Nav/Nav'
import SpecificNews from './SpecificNews'

function SpecNewsPage({backPath,news}) {
  const [post,setPost] = useState([])
  let  {id} = useParams()

  useEffect(() => {
    const poster = news.find(post => post._id === id)
    setPost(poster)
  },[])
  return (
    <div>
        <Nav backPath={backPath}/>
        <SpecificNews post ={post} />
    </div>
  )
}

export default SpecNewsPage