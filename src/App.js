import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Counter from './components/Counter';
import Detail from './components/Detail';
import {Routes, Route, Link} from 'react-router-dom'
import HomePage from './pages/HomePage';
import axios from 'axios';
import { useEffect, useState } from 'react';
import dummyProducts from './pages/HomePage';
function App() {
  //axios.get("URL 주소")

  const [prodocts, setProducts] = useState([]);
  useEffect(()=>{
    axios
      .get("https://codingapple1.github.io/shop/data2.json")
      .then((response)=>{
         setProducts(response.data);
      });
  },[]);

  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>

      <Routes>
        <Route path="/detail/:id" element = {<Detail/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/detail" element={<Detail/>}/>
        <Route path="/Counter" element={<Counter/>}/>

        <Route path="/about" element={ <div>어바웃페이지임</div> } />
        <Route path="*" element={<div>404 not found</div>}/>
      </Routes>
    </div>
  );
}

export default App;
