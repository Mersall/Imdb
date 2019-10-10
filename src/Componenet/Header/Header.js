import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = props => {
  let sup;
  if (props.ShowSearch) {
    sup = <input onChange={props.handelSerchTermChange} value={props.searchTerm} type="text" placeholder="search" />;
  } else {
    sup = (
      <h2>
        <Link to="/"> back</Link>
      </h2>
    );
  }
  return (
    <header>
      <h1>
        <Link to="/">Mersal Netflex</Link>
      </h1>
      {sup}
    </header>
  );
};

export default Header;
