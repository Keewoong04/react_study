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
import React from 'react';
import { Nav } from "react-bootstrap";
import TabContents from "./components/TabContents";

function App() {
  //axios.get("URL 주소")
  const [탭, 탭변경] = useState();
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
        <Nav variant="tabs" defaultActiveKey="link0">
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  탭변경(0);
                }}
                eventKey="link0"
              >
                버튼0
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  탭변경(1);
                }}
                eventKey="link1"
              >
                버튼1
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  탭변경(2);
                }}
                eventKey="link2"
              >
                버튼2
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <TabContents 탭={탭} />
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
