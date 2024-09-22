import React, { useState } from 'react';
import './App.css';
import './style.css';
import './font.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import Writing from './Writing';
import Works from './Works';
import Work1 from './Work1';
import Work2 from './Work2';
import Work3 from './Work3';
import Work4 from './Work4';
import Work5 from './Work5';
import Work6 from './Work6';
import Work7 from './Work7';
import Work8 from './Work8';
import Work9 from './Work9';
import Work10 from './Work10';
import Work11 from './Work11';
import PageToTop from './components/PageToTop';
import AppFilter from './filteringPage/Appfilter';
import Webfilter from './filteringPage/Webfilter';
import Filter2024 from './filteringPage/Filter2024';
import Filter2023 from './filteringPage/Filter2023';
import Filter2021 from './filteringPage/Filter2021';

function App() {
  const [activeNav, setActiveNav] = useState(1);
  
  return (
    <>
    <div>
      <BrowserRouter>
      <PageToTop/>
        <Routes>
          <Route path="/" element={<Works activeNav={activeNav} setActiveNav={setActiveNav} />}></Route>
          <Route path="/App" element={<AppFilter activeNav={activeNav} setActiveNav={setActiveNav} />}></Route>
          <Route path="/Web" element={<Webfilter activeNav={activeNav} setActiveNav={setActiveNav} />}></Route>
          <Route path="/2024" element={<Filter2024 activeNav={activeNav} setActiveNav={setActiveNav} />}></Route>
          <Route path="/2023" element={<Filter2023 activeNav={activeNav} setActiveNav={setActiveNav} />}></Route>
          <Route path="/2021" element={<Filter2021 activeNav={activeNav} setActiveNav={setActiveNav} />}></Route>
          <Route path="Work1" element={<Work1 activeNav={activeNav} setActiveNav={setActiveNav} />}></Route>   
          <Route path="Work2" element={<Work2 activeNav={activeNav} setActiveNav={setActiveNav} />}></Route>   
          <Route path="Work3" element={<Work3 activeNav={activeNav} setActiveNav={setActiveNav} />}></Route>   
          <Route path="Work4" element={<Work4 activeNav={activeNav} setActiveNav={setActiveNav} />}></Route>
          <Route path="Work5" element={<Work5 activeNav={activeNav} setActiveNav={setActiveNav} />}></Route>   
          <Route path="Work6" element={<Work6 activeNav={activeNav} setActiveNav={setActiveNav} />}></Route>  
          <Route path="Work7" element={<Work7 activeNav={activeNav} setActiveNav={setActiveNav} />}></Route> 
          <Route path="Work8" element={<Work8 activeNav={activeNav} setActiveNav={setActiveNav} />}></Route> 
          <Route path="Work9" element={<Work9 activeNav={activeNav} setActiveNav={setActiveNav} />}></Route>  
          <Route path="Work10" element={<Work10 activeNav={activeNav} setActiveNav={setActiveNav} />}></Route>  
          <Route path="Work11" element={<Work11 activeNav={activeNav} setActiveNav={setActiveNav} />}></Route>  
          <Route path="/Writing/*" element={<Writing activeNav={activeNav} setActiveNav={setActiveNav} />}></Route>
          <Route path="/About/*" element={<About activeNav={activeNav} setActiveNav={setActiveNav} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
     
    </>
  );
}

export default App;
