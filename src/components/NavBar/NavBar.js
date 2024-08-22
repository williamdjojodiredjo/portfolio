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
        <li><Link to="/markdown-previewer">Markdown Previewer</Link></li>
        <li><Link to="/drum-machine">Drum Machine</Link></li>
        <li><Link to="/calculator">JavaScript Calculator</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
