import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from './router';
import { LookupProvider } from './lookup.context';
import './styles.css';

const App = () => {
  return (
    <div className="app">
      <LookupProvider>
        <Router />
      </LookupProvider>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
