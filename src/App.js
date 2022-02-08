import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Collectif from './pages/Collectif/Collectif';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';


const App = () => {

  return (
    <Routes >
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/collectif" element={<Collectif/>} />
      <Route exact path="/projects" element={<Projects/>} />
      <Route exact path="/contact" element={<Contact/>} />
      <Route exact path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
