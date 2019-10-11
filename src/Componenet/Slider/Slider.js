import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: 'center',
      infinite: false,
      centerPadding: '10px',
      slidesToShow: 4.8,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1
          }
        }
      ],
      afterChange: function(index) {
        console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
      }
    };

    return (
      <div className="slider">
        <h2>Tv-Shows</h2>

        <Slider {...settings}>{this.props.showCard}</Slider>
      </div>
    );
  }
}
