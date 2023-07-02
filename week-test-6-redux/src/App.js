import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import ThemeToggle from './components/ThemeToggle';
import Nav from './components/Nav';
import Home from './components/Home';
import Contact from './components/Contact';
import Service from './components/Service';

const App = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <div style={{
      backgroundColor: theme == 'light' ? "white" : "black",
      color: theme === 'light' ? 'black' : 'white'
    }}>
      <Nav/>
      <ThemeToggle />
      <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/service" element={<Service/>}></Route>
       <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </div>
  );
};

export default App;

