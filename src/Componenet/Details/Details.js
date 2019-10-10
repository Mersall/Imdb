import React from 'react';
import Header from '../Header/Header';
import './Details.css';

class Details extends React.Component {
  render() {
    const { title, trailer } = this.props.show;
    return (
      <div className="details">
        <Header />

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
