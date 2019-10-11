import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
  state = {
    backgroundColor: 'transparent'
  };

  boundFun = e => {
    if (window.scrollY > 50) {
      this.setState({ backgroundColor: 'rgb(20, 20, 20)' });
    } else {
      this.setState({ backgroundColor: 'transparent' });
    }
  };

  componentDidMount = () => {
    window.addEventListener('scroll', this.boundFun, false);
  };

  render() {
    let sup;
    let logo;
    if (this.props.ShowSearch) {
      sup = (
        <input
          onChange={this.props.handelSerchTermChange}
          value={this.props.searchTerm}
          type="text"
          placeholder="search"
        />
      );
      logo = (
        <h1>
          <Link to="/"> Netflex</Link>
        </h1>
      );
    } else {
      sup = (
        <Link to="/Search">
          <img alt={this.props.title} src="https://img.icons8.com/ios-filled/50/000000/back.png" />
          <h2>back to browse</h2>
        </Link>
      );
    }
    return (
      <header style={{ backgroundColor: this.state.backgroundColor }}>
        {logo}
        {sup}
      </header>
    );
  }
}

export default Header;
