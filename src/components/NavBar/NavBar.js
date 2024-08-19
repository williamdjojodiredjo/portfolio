import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/todo-list">Todo List</Link></li>
        <li><Link to="/random-quote-machine">Random Quote Generator</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
