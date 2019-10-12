import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends React.Component {
  state = {
    backgroundColor: "transparent"
  };

  boundFun = e => {
    if (window.scrollY > 50) {
      this.setState({ backgroundColor: "rgb(20, 20, 20)" });
    } else {
      this.setState({ backgroundColor: "transparent" });
    }
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.boundFun, false);
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
          <i class="fas fa-arrow-left"></i>
          <h4>back to browse</h4>
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
