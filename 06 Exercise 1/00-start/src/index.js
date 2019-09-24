import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from './router';
import './styles.css';

const App = () => {
  return (
    <div className="app">
      <Router />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
