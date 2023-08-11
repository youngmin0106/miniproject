import logo from './logo.svg';
import './App.css';
import { Route, Routes, } from 'react-router-dom';
import Header from './component/Header';
import React, { Component, useState } from "react";
import Main from './Pages/Main';

import Info from './Pages/Info';
import data from './mockdata';
import Guide from './Pages/Guide';
import Community from './Pages/Community';
import Login from './Pages/Login';




function App() {
  const [video , setVideo] = useState(data);
  
 
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path='/' element={<Main/> }/>
      <Route path='/info' element={<Info/>}/>
      <Route path='/guide' element={<Guide/>}/>
      <Route path='/community' element={<Community/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;


