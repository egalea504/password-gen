// // Style Import
// import "./App.css"

// // App.js
// import React, { useState, useEffect } from "react";
// import Axios from 'axios';

import { Routes, Route } from 'react-router-dom';
import Home from './pages';
import SignIn from './pages/signin';
import AddPasswordInfo from './pages/addPasswordInfo';

const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/addpassword" element={<AddPasswordInfo />} />
       </Routes>
    </>
 );
};

export default App;

