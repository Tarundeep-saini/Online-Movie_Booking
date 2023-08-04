import React, { useState,useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import './SeatBookinCss.css'; // Import the CSS file for styling

const SeatBooking = () => {
  const {name,id} =  useParams()
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setPrice(()=>{
        if(selectedSeats.length===0){
            selectedSeats.length=0
            return 0
        }
        else{
            return selectedSeats.length*250
        }
    }
    );
    console.log(price)
  }, [selectedSeats]);
  const handleSeatClick = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      // Deselect the seat if it's already selected
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber));
    } else {
      // Select the seat if it's not selected
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };
  return (
    <div className="theatre-seat-picker">
      <h2>Pick your seats for {name} </h2>
                    
      <div className="seat-container">
        {[...Array(140)].map((_, index) => (
          <div
            key={index}
            className={`seat ${selectedSeats.includes(index + 1) ? 'selected' : ''}`}
            onClick={() => handleSeatClick(index + 1)}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div className='buttons' >
      <Link to={`/`} className="button" > Home </Link>      
        <Link className='procced' to={`/booking/:${id}/seatbooking/:${name}/bill`} data={price}  > Proceed to pay {price}$ for {selectedSeats.length} Seats</Link>  
      </div>

      <div className='screen' >screen</div>
    </div>
  );
};

export default SeatBooking;
