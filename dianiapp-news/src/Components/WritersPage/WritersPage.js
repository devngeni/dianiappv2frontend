import React, { useState } from 'react';
import './WritersPage.css';
import Nav from '../Nav/Nav'
import { useNavigate } from 'react-router-dom';

function WritersPage({backPath}) {
    const navigate = useNavigate()

    const[title,setTitle] = useState('');
    const [file, setFile] = useState(null);
    const [description,setDescription]=useState('');
    const [time_stamp,setTime_stamp]= useState('');
    const[time_stop,setTime_stop]= useState('');

    function toTimestamp(strDate){
        var datum = Date.parse(strDate);
        return datum/1000;
     }

    const OnSubmitArticle =async(e)=>{
        e.preventDefault()

        const formData = new FormData();
        formData.append("image", file);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("time_start", time_stamp);
        formData.append("time_stop", time_stop);


  fetch("https://server.dianiapp.me/news/new", {
    method: "POST",
    mode:"cors",
    body: formData,
  })
    .then((response) => {
     const jsonresponse = response.status
     console.log(jsonresponse)
     if(jsonresponse === 201){
        navigate('/')
     }else{
   alert('An error occurred ')
     }
    })
    .catch((error) => {
      console.log(error)
    });
};


    const onChangeTitle =(e)=>{
        setTitle(e.target.value);
    }
    const onChangeTime_stamp =(e)=>{
        let newDateStamp = toTimestamp(e.target.value)
        setTime_stamp(newDateStamp);
    }
    const onChangeTime_stop =(e)=>{
        let newDateStamp = toTimestamp(e.target.value)
        setTime_stop(newDateStamp);
    }
    const onChangeDescription =(e)=>{
        setDescription(e.target.value);
    }
    const onChangeImage =(e)=>{
        setFile(e.target.files[0]);
    }
return (
<div>
    <Nav backPath={backPath} />
<div className='WritersPage'>
<form onSubmit={OnSubmitArticle}>
    <div className='Input-div-news-j grid mx-auto py-4'>
        <label className='py-2'>Title</label>
        <input type='text' name='title' value={title} onChange={onChangeTitle}/>
    </div>
    <div className='Input-div-news-j flex mx-auto py-4 items-center justify-between '>
        <div >
        <label className='px-4 py-2'>Time start</label>
        <input type='date' name='time_start' onChange={onChangeTime_stamp}/>
        </div>
        <div className=''>
        <label name='timestamp' className='px-4 py-2'>Time Stop</label>
        <input type='date' name='time_stop'  onChange={onChangeTime_stop}/>
        </div>
    </div>
    <div className='Input-div-news-j grid mx-auto py-4'>
        <label className='py-2'>Image</label>
        <input type="file" name="image" onChange={onChangeImage} />
    </div>
    <div className='Input-div-news-j grid mx-auto py-4'>
        <label className='py-2'>Content</label>
        <textarea type='text' name='description' value={description} onChange={onChangeDescription}></textarea >
    </div>


    <div className='py-4'>
        <input type='submit' className='submit-button-j'  value='Post'/>
    </div>
</form>
    </div>
</div>
  )
}

export default WritersPage;