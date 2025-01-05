import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Find the root element in your HTML
const rootElement = document.getElementById('root');

// Use createRoot to render your app
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
