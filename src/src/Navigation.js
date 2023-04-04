import logo from './logo.svg';
import './App.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/display">Display</NavLink>
    </nav>
    
  );
}

export default Navigation;
