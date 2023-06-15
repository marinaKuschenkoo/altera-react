import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router}  from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import Cases from './components/Cases';
import Slider from './components/Slider';
import HeaderCases from './components/HeaderCases';
import ProfileCases from './components/ProfileCases';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/cases" element={<Cases/>}/>
            <Route path="/profile-cases" element={<ProfileCases/>}/>
            <Route path="/header-cases" element={<HeaderCases/>}/> 
          </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
