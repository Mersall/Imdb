import React from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard.js';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
    this.handelSerchTermChange = this.handelSerchTermChange.bind();
  }

  handelSerchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };
  render() {
    return (
      <div className="search">
        <header>
          <h1>uranium imdb</h1>
          <input onChange={this.handelSerchTermChange} value={this.state.searchTerm} type="text" placeholder="search" />
        </header>
        <div>
          {preload.shows
            .filter(
              show =>
                `${show.title} ${show.descreption}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => {
              return <ShowCard key={show.imdbID} {...show} />;
            })}
        </div>
      </div>
    );
  }
}
export default Search;
