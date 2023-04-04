import logo from './logo.svg';
import './App.css';
import { useLocation, Navigate } from 'react-router-dom';

function Display() {
  const location = useLocation();
  const name = new URLSearchParams(location.search).get("name")

  if (name === null) {
    return <Navigate to={"/about?date="+new Date().toLocaleDateString()} state={{ from: location }} replace/>;
  }
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
