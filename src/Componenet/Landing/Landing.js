import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
const Landing = () => {
  return (
    <div className="landing">
      <Link to="/search">
        <h1>Mersal Netflex</h1>
      </Link>

      <div className="user-tab">
        <h2>who`s watching</h2>
        <div className="users">
          <Link to="/search">
            <h4>Mersal</h4>
          </Link>

          <Link to="/search">
            <h4>uranium</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
