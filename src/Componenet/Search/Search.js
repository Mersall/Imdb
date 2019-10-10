import React from "react";
import ShowCard from "../showCard/ShowCard";
import Header from "../Header/Header";
import "./Search.css";

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
    return (
      <div className="search">
        <Header
          ShowSearch
          searchTerm={this.state.searchTerm}
          handelSerchTermChange={this.handelSerchTermChange}
        />

        <div>
          {this.props.Shows.filter(
            show =>
              `${show.title} ${show.descreption}`
                .toUpperCase()
                .indexOf(this.state.searchTerm.toUpperCase()) >= 0
          ).map(show => {
            return <ShowCard key={show.imdbID} {...show} />;
          })}
        </div>
      </div>
    );
  }
}
export default Search;
