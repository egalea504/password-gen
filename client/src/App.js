// // Style Import
// import "./App.css"

// // App.js
// import React, { useState, useEffect } from "react";
// import Axios from 'axios';

import { Routes, Route } from 'react-router-dom';
import Home from './pages';
import SignIn from './pages/signin';
import Dashboard from './pages/dashboard';
import SignUp from './pages/signup';

const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
       </Routes>
    </>
 );
};

export default App;

