// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import Reddit from './Reddit.jsx';
import './style.css';

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <Reddit />
  </React.StrictMode>
);
