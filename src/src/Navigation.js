import logo from './logo.svg';
import './App.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/display?name=Joe">Display Joe</NavLink>
      <NavLink to="/display?name=James">Display James</NavLink>
    </nav>
    
  );
}

export default Navigation;
