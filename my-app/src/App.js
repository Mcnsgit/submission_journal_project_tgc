import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import Week1 from './components/pages/Week1';
import Week2 from './components/pages/Week2';
import Week3 from './components/pages/Week3';
import Week4 from './components/pages/Week4';
import Week5 from './components/pages/Week5';
import Week6 from './components/pages/Week6';
import Week7 from './components/pages/Week7';
import Week8 from './components/pages/Week8';
import Week9 from './components/pages/Week9';
import Week10 from './components/pages/Week10';
import Week11 from './components/pages/Week11';
import Week12 from './components/pages/Week12';
import About from './components/pages/About';
// import RelationalDatabases from './components/pages/RelationalDatabases';
// import JavaScriptChallenges from './components/pages/JavaScriptChallenges';
// import SQLChallenge from './components/pages/SQLChallenge';
// import Employability from './components/pages/Employability';
// Import other week components
import './App.css'; // Assuming global styles are here
import HeroSection from './components/HeroSection';

function App() {
  
  return (
    <BrowserRouter>
     <Routes> {/* Note this wrapping `Routes` component */}
        <Route path="/" element={<HeroSection />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/about" element={<About/>} />
        <Route path="/week12" element={<Week12 />} />
        <Route path="/week11" element={<Week11 />} />
        <Route path="/week10" element={<Week10 />} />
        <Route path="/week9" element={<Week9 />} />
        <Route path="/week8" element={<Week8 />} /> 
        <Route path="/week7" element={<Week7 />} />
        <Route path="/week6" element={<Week6 />} />
        <Route path="/week5" element={<Week5 />} />
        <Route path="/week4" element={<Week4 />} />
        <Route path="/week3" element={<Week3 />} />
        <Route path="/week2" element={<Week2 />} />
        <Route path="/week1" element={<Week1 />} />
        </Routes>        
    </BrowserRouter>
  );
}


export default App;