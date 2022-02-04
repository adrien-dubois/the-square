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
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/collectif" element={<Collectif/>} />
      <Route exact path="/project-1" element={<Project1/>} />
      <Route exact path="/project-2" element={<Project2/>} />
      <Route exact path="/project-3" element={<Project3/>} />
      <Route exact path="/project-4" element={<Project4/>} />
      <Route exact path="/contact" element={<Contact/>} />
      <Route exact path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
