import logo from './logo.svg';
import './App.css';
import { Route, Routes, } from 'react-router-dom';
import Header from './component/Header';
import React, { Component, useState } from "react";
import Main from './component/Main';
import { Carousel } from 'react-bootstrap';


function App() {
  const [evnetimg, setEventImg] = useState();

  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path='/' element={<Main/> }/>
      <Route path='/' element={<Carousel/>}/>
      </Routes>
    </div>
  );
}

export default App;
