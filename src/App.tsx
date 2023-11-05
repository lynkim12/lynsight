import React from 'react';
import './App.css';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import Writing from './Writing';
import Works from './Works';
import Work1 from './Work1';
import WorkPage from './WorkPage';


function App() {
  return (
    <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Works />}></Route>
          <Route path="Work1" element={<Work1 />}></Route>   
          <Route path="WorkPage" element={<WorkPage />}></Route> 
          <Route path="/Writing/*" element={<Writing />}></Route>
          <Route path="/About/*" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
     
    </>
  );
}

export default App;
