import logo from './logo.svg';
import './App.css';
import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';

function Display() {
  const name = new URLSearchParams(useLocation().search).get("name")
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Display, {name}.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Display;
