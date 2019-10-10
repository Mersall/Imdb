import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = props => {
  let sup;
  let logo;
  if (props.ShowSearch) {
    sup = <input onChange={props.handelSerchTermChange} value={props.searchTerm} type="text" placeholder="search" />;
    logo = (
      <h1>
        <Link to="/"> Netflex</Link>
      </h1>
    );
  } else {
    sup = (
      <Link to="/Search">
        <img alt={props.title} src="https://img.icons8.com/ios-filled/50/000000/back.png" />
        <h2>back to browse</h2>
      </Link>
    );
  }
  return (
    <header>
      {logo}
      {sup}
    </header>
  );
};

export default Header;
