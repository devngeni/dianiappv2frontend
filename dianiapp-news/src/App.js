import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import SpecNewsPage from './Components/SpecificNews/SpecNewsPage';

function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
    <Route exact path='/' element={<Home backPath='/news' />} />
    <Route exact path='/news' element={<SpecNewsPage backPath='/' />} />
    </Routes>
      </div>
    </Router>
  );
}

export default App;
