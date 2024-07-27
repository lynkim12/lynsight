import React, { useState } from 'react';
import './App.css';
import './style.css';
import './font.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import Writing from './Writing';
import Works from './Works';
import Work1 from './Work1';
import Work4 from './Work4';
import Work6 from './Work6';
import Work7 from './Work7';
import Work8 from './Work8';
import Work9 from './Work9';
import Work10 from './Work10';
import WorkPage from './WorkPage';
import PageToTop from './PageToTop';
import Works2 from './filteringPage/Works2';
import Works3 from './filteringPage/Works3';
import Works4 from './filteringPage/Works4';
import Works5 from './filteringPage/Works5';
import Works6 from './filteringPage/Works6';

function App() {
  const [activeNav, setActiveNav] = useState(1);
  
  return (
    <>
    <div>
      <BrowserRouter>
      <PageToTop/>
        <Routes>
          <Route path="/" element={<Works activeNav={activeNav} setActiveNav={setActiveNav} />}></Route>
          <Route path="/App" element={<Works2 activeNav={activeNav} setActiveNav={setActiveNav} />}></Route>
          <Route path="/Web" element={<Works3 activeNav={activeNav} setActiveNav={setActiveNav} />}></Route>
          <Route path="/2024" element={<Works4 activeNav={activeNav} setActiveNav={setActiveNav} />}></Route>
          <Route path="/2023" element={<Works5 activeNav={activeNav} setActiveNav={setActiveNav} />}></Route>
          <Route path="/2021" element={<Works6 activeNav={activeNav} setActiveNav={setActiveNav} />}></Route>

          <Route path="Work1" element={<Work1 activeNav={activeNav} setActiveNav={setActiveNav} />}></Route>   
          <Route path="Work4" element={<Work4 activeNav={activeNav} setActiveNav={setActiveNav} />}></Route>
          <Route path="Work6" element={<Work6 activeNav={activeNav} setActiveNav={setActiveNav} />}></Route>  
          <Route path="Work7" element={<Work7 activeNav={activeNav} setActiveNav={setActiveNav} />}></Route> 
          <Route path="Work8" element={<Work8 activeNav={activeNav} setActiveNav={setActiveNav} />}></Route> 
          <Route path="Work9" element={<Work9 activeNav={activeNav} setActiveNav={setActiveNav} />}></Route>  
          <Route path="Work10" element={<Work10 activeNav={activeNav} setActiveNav={setActiveNav} />}></Route>  
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
