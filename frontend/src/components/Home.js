import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () =>{
  return (
    <div>
      <h1>Página Inicial</h1>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/todo">To-do</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;