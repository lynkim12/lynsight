import React from 'react';
import './App.css';
import './style.css';
import Navigator from './Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import Writing from './Writing';
import Works from './Works';

function App() {
  return (
    <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Works />}></Route>
          <Route path="/Writing/*" element={<Writing />}></Route>
          <Route path="/About/*" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
     
    </>
  );
}

export default App;
