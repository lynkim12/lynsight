import React from 'react';
import './App.css';
import './style.css';
import Navigator from './Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import Writing from './Writing';
import Works from './Works';
import Work1 from './Work1';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


function App() {
  return (
    <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Works />}>
            
            <Route path="2" element={<Work1 />}></Route>
            <Route path="3" element={<Work1 />}></Route>
            <Route path="4" element={<Work1 />}></Route>
            <Route path="5" element={<Work1 />}></Route>
          </Route>
          <Route path="Work1" element={<Work1 />}></Route>   
          <Route path="/Writing/*" element={<Writing />}></Route>
          <Route path="/About/*" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
     
    </>
  );
}

export default App;
