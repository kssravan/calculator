import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Calculator from '././components/calculator/index.js';

const title = "Calculator";

const App = () => {
  return <div>
    <nav className="app-header layout-row align-items-center justify-content-center">
      <div className="layout-row align-items-center">
        <h4 id="app-title" data-testid="app-title" className="app-title">{title}</h4>
      </div>
    </nav>
    <Calculator />
  </div>
}

export default App;
