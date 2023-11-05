import React, { useState } from 'react';
import './App.css';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import Writing from './Writing';
import Works from './Works';
import Work1 from './Work1';
import WorkPage from './WorkPage';


function App() {
  const [activeNav, setActiveNav] = useState(1);
  
  return (
    <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Works activeNav={activeNav} setActiveNav={setActiveNav} />}></Route>
          <Route path="Work1" element={<Work1  activeNav={activeNav} setActiveNav={setActiveNav} />}></Route>   
          <Route path="WorkPage" element={<WorkPage activeNav={activeNav} setActiveNav={setActiveNav}/>}></Route> 
          <Route path="/Writing/*" element={<Writing activeNav={activeNav} setActiveNav={setActiveNav} />}></Route>
          <Route path="/About/*" element={<About activeNav={activeNav} setActiveNav={setActiveNav} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
     
    </>
  );
}

export default App;
