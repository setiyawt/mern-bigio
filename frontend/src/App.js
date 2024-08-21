import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Table from './components/Table/Table';
import AddStory from './components/AddStory/AddStory';

const App = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main">
        <div className="header">
          <h1>Stories</h1>
        </div>
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/addstory" element={<AddStory />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
