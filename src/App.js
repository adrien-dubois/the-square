import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Collectif from './pages/Collectif/Collectif';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import { 
  Project1, 
  Project2, 
  Project3, 
  Project4 
} from './pages/Projects/Projects';

const App = () => {

  return (
    <Routes >
      <Route path="/" element={<Home/>} />
      <Route path="/collectif" element={<Collectif/>} />
      <Route path="/project-1" element={<Project1/>} />
      <Route path="/project-2" element={<Project2/>} />
      <Route path="/project-3" element={<Project3/>} />
      <Route path="/project-4" element={<Project4/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
