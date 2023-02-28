import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import SpecNewsPage from './Components/SpecificNews/SpecNewsPage';
import WritersPage from './Components/WritersPage/WritersPage';

function App() {
 const [news,setNews] = useState([]);

 const fetchNews =async()=>{
    const response = await fetch('https://server.dianiapp.me/news/all');
    const json = await response.json();
    await setNews(json)
    // console.log(json)
 }


 useEffect(()=>{
fetchNews()
 },[])
  return (
    <Router>
    <div className="App">
    <Routes>
    <Route exact path='/' element={<Home backPath='/news' news={news}/>} />
    <Route exact path='/news/:id' element={<SpecNewsPage backPath='/' news={news} />} />
    <Route exact path='/write' element={<WritersPage backPath='/' news={news} />} />
    </Routes>
      </div>
    </Router>
  );
}

export default App;
