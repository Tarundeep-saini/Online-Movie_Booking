import './App.css';
import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Home from './Homepage';
import Navbar from './Navbar';
import Booking from './Booking';
import SeatBooking from './SeatBooking';
import Billing from './billing';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/booking'element={<Booking/>}/>
        <Route path='/booking/:id'element={<Booking/>}/>
        <Route path='/booking/:id/seatbooking/:name' element={ <SeatBooking/> } />
        <Route path='/booking/:id/seatbooking/:name/bill' element={ <Billing/> } ></Route>
      </Routes>
    </BrowserRouter>
    </>
    
  );
}


export default App;
