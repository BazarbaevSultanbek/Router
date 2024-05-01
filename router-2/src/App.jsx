// App.js
import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
