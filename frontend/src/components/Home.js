import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <button id='button-login'>
              <Link to="/login">Login</Link>
            </button>
          </li>
          <h1>Organize
            <p>your daily jobs</p>
          </h1>
          <li>
            <button id='button-to-do'>
              <Link to="/todo">Get to To-do list</Link>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;