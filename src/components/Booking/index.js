import React from "react";
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import styles from './booking.module.css';
import { LocalizationProvider, MobileDateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { getBookingRef } from "../../utils/firebase";
import { getDocs } from "firebase/firestore";
import { bookingConverter, BookingError } from "../../utils/booking";

const Booking = () => {

    // Any error
    const [error, setError] = useState(null);

    // Show bookings container
    const [showBookings, setShowBookings] = useState(false);
    const onButtonClick = () => {
        setShowBookings(true);
    }

    // Render custom seat toggle group
    const renderToggleGroupChildren = () => {
        var children = [];
        for (let index = 1; index <= maxPeople; index++) {
            children.push(<ToggleButton key={index} value={index} disabled={index > availableSeats}>{index}</ToggleButton>);                      
        }
        return children;
    }

    // People count for booking
    const [availableSeats, setAvailableSeats] = useState(4);
    const maxPeople = 4;
    const[seatCount, setSeatCount] = useState(1);
    const handlePeopleCountChange = (
        event,
        peopleCount
    ) => {
        setSeatCount(peopleCount);
    }
    // Booking exists
    const onExistingBookingFound = (booking) => {
        console.log(`Existing booking found ${booking.toString()}`);
        if(booking.seatsTaken < maxPeople) {
            // Some seats still left
            setAvailableSeats(maxPeople - booking.seatsTaken);
            setSeatCount(1);
        } else {
            // No seats left
            console.log(`Time conflict`);

            // Conflict, show error message
            setSeatCount(0);
            setAvailableSeats(0);
            setError(new BookingError("Time unavailable. Please choose another date or time."))
        }
    }

    // No booking exists
    const onNoExistingBookingFound = () => {
        console.log("No existing booking found");
        setAvailableSeats(maxPeople);
    }

    // User selected datetime
    const [time, setTime] = useState();
    const onTimeSelected = (time) => {
        // Reset error
        setError(null);

        const unixSelectedTime = time.unix();
        setTime(unixSelectedTime);
        console.log(`Selected datetime ${unixSelectedTime}`);
        console.log(`Bookings ${bookings}`);

        // Check if booking exists, 
        const existingBooking = bookings.find(b => b.timestamp === unixSelectedTime);
        if(existingBooking !== undefined) {
            // Booking exists
            onExistingBookingFound(existingBooking);
        } else {
            // No booking exists
            onNoExistingBookingFound();
        }
    }

    // TODO: Unavailable dates

    // Existing bookings 
    const [bookings, setBookings] = useState([]);
    const fetchBookings = async() => {
        const response = getBookingRef().withConverter(bookingConverter);
        const data = await getDocs(response);
        data.docs.forEach(item=>{
            setBookings(bookings => [...bookings, item.data()])
        });
    }

    useEffect(() => {
        fetchBookings();
    }, []);
    // ~~~~~~~~~~~~~~~~~~~~

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className={styles['container']} >
            {showBookings ? <div className={styles['book-time-container']}>
                <h2 className={styles['header']}>Book Time</h2>
                <div className={styles['input-container']}>
                    <h3>Select a time</h3>
                    <MobileDateTimePicker 
                        minutesStep={30}
                        onChange={newValue => onTimeSelected(newValue)}
                    disablePast/>
                </div>
                <div className={styles['input-container']}>
                    <h3 className={styles["header-with-subheader"]}>Select number of seats</h3>
                    <p className={styles["subheader"]}>{availableSeats} {availableSeats === 1 ? "seat" : "seats"} available</p>
                    <ToggleButtonGroup
                        color="primary"
                        value={seatCount}
                        exclusive
                        onChange={handlePeopleCountChange}>
                            {renderToggleGroupChildren()}
                    </ToggleButtonGroup>
                </div>
                <Button onClick={() => {}} variant="contained" color="primary">Confirm time</Button>
                {error !== null ? <p className={styles["error"]}>{error.message}</p> : null}
            </div> : 
            <Button onClick={onButtonClick} variant="contained" color="primary">Book Time</Button>}
            
        </div>
        </LocalizationProvider>
    )
}

export default Booking;