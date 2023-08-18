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
import QnA from './Pages/QnA';
import Customer from './Pages/Customer';
import Profiles from './Pages/profiles';






function App() {
  const [video , setVideo] = useState(data);
 
  
 
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path='/' element={<Main/> }/>
      <Route path='/info' element={<Info/>}/>
      <Route path='/guide' element={<Guide/>}/>
      <Route path='/community' element={<Community/>} />
      <Route path='/q&a' element={<QnA/>}/>
      <Route path='/customer' element={<Customer/>}/>
      <Route path='/profiles' element={<Profiles/>}/>

      <Route path='/login' element={<Login/>}/>
      

      <Route path='*' element={<div>존재하지 않는 페이지 입니다.</div>} />
      </Routes>
    </div>
  );
}

export default App;


