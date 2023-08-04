import React from "react";
import moviesList from "./MoviesList";
import { Link, useParams } from "react-router-dom";
import Bookking_Style from "./Booking_Style.css"
import Billing from "./billing";
const Booking = () => {
  const { id } = useParams();
  const movie = moviesList.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <h1>Movie not found</h1>;
  }

  const { name, releaseDate,clipID,summary,cast } = movie;

  return (
        <div className="Booking_body" >
            <div className="card" >
                <iframe className="trailer"
                title="YouTube Video"
                width="870"
                height="465"
                src={`https://www.youtube.com/embed/${clipID}?autoplay=1`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowfullScreen
                >
                </iframe>
                <h2 className="name" >{name}</h2> 
                <h4 className="date" >{releaseDate}</h4> 
            <h2 className="summary" >{summary}</h2>
            <h1 className="cast_head" >Cast</h1>
            <div className="cast" >
            
                {cast.map(member=>{
                    return(<p className="members" >{member}</p>)
                 })
                }
            </div>
            <div className="buttons">
                
                <Link className="button" to="/" >Home</Link>
                <Link className="button light"  to={`/booking/${id}/seatbooking/${name}`} >Pick My Seat</Link>
            </div>
            
            </div>
        </div>


  )
    
  
};

export default Booking;
