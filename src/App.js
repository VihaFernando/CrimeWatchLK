import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/Homepage';
import Login from './components/Login';
import AdminInterface from './admin_pages/AdminInterface'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<Header />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminInterface />} />
      </Routes>
    </Router>
  );
}

export default App;
