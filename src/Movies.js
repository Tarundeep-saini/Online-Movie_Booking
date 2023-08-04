import React from "react";
import { Link } from "react-router-dom";
import moviesList from "./MoviesList"; // Import moviesList from MoviesList.js
import Booking from "./Booking";
import MoviesCSS from "./MoviesCSS.css"

const Movies = () => {
  return (
    <div className="section_body" id="movies" >
      <h1 className="Section_title">Movies</h1>
      <div className="Movies_section">
        {moviesList.map((movie) => {
            const data= movie.id
          return (
            <div className="movie" key={movie.id}>
              <div className="movie_sha">
                <img src={movie.image} alt={movie.name} />
                <h1 className="movie_title">{movie.name}</h1>
                <div>
                  <p>{movie.releaseDate}</p>
                  <p>{movie.length}</p>
                  <Link
                    to={`/booking/${data}`}
                    className="Book_buttoon"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
