
import './App.css';
import React, { useState, useEffect } from "react";
import { Route , Routes, BrowserRouter } from "react-router-dom";
import LoginPage from './LogPage/LoginPage';
import Register from './RegisterPage/Register';
import ChatPage from './ChatPage/chatPage';
import useData from '.';
import AddContacts from './addContacts/AddContacts';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage />}/>
            <Route path="Login" element={<LoginPage />} />
            <Route path="Register" element={<Register />} />
            <Route path="Chat" element={<ChatPage props={navigator.storage}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;