import React from 'react';
import Header from '../Header/Header';
import './Details.css';

class Details extends React.Component {
  render() {
    const { title, description, year, poster, trailer } = this.props.show;
    return (
      <div className="details">
        <Header />
        <section>
          <h1>{title}</h1>
          <h2> ({year}) </h2>
          <img alt={`poster for ${title}`} src={require(`../../img/posters/${poster}`)} />
          <p>{description}</p>
        </section>
        <div>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder="0"
            allowFullScreen
            title={`trailer for${title}`}
          />
        </div>
      </div>
    );
  }
}

export default Details;
