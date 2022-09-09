import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import { NewsProvider } from './context/NewsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <NewsProvider>
        <App />
      </NewsProvider>
    </Router>
  </React.StrictMode>
);
