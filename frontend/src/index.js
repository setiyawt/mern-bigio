import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router
import './index.css'; 
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component wrapped in Router
root.render(
  <Router>
    <App />
  </Router>
);
