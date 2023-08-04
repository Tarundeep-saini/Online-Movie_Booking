import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header_css from "./Header_css.css"

const Header = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <header>
      <Slider {...sliderSettings}>
        <div>
          <img className='poster_img' src="https://image.tmdb.org/t/p/original/yaRps1bMQLyz54M8ib5YdA2a2RZ.jpg" alt="Slider Image 1" />
        </div>
        <div>
          <img className='poster_img' src="https://blogs-images.forbes.com/scottmendelson/files/2015/07/Mission-Impossible-Rogue-Nation-2015-Poster-HD-wallpaper.jpg" alt="Slider Image 2" />
        </div>
        <div>
          <img className='poster_img' src="https://i.ytimg.com/vi/IjjYPBQ0UzQ/maxresdefault.jpg" alt="Slider Image 3" />
        </div>
      </Slider>
    </header>
  );
};

export default Header;
