import React from "react";
import Header from "../Header/Header";
import "./Search.css";
import { Link } from "react-router-dom";

import SwipeToSlide from "../Slider/Slider.js";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
    this.handelSerchTermChange = this.handelSerchTermChange.bind();
  }

  handelSerchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    const ShowCard = this.props.Shows.filter(
      show =>
        `${show.title} ${show.descreption}`
          .toUpperCase()
          .indexOf(this.state.searchTerm.toUpperCase()) >= 0
    ).map(show => {
      return (
        <div key={show.imdbID}>
          <Link to={`/details/${show.imdbID}`} className="card">
            <img
              alt={`${show.title} poster`}
              src={require(`../../img/posters/${show.poster}`)}
            />
          </Link>
        </div>
      );
    });
    return (
      <>
        <Header
          ShowSearch
          searchTerm={this.state.searchTerm}
          handelSerchTermChange={this.handelSerchTermChange}
        />
        <div className="cover"></div>
        <SwipeToSlide showCard={ShowCard} />
        <SwipeToSlide showCard={ShowCard} />
        <div className="cover2"></div>
        <SwipeToSlide showCard={ShowCard} />
        <SwipeToSlide showCard={ShowCard} />
      </>
    );
  }
}
export default Search;
