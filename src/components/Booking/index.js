import React from "react";
import { useState } from "react";
import Button from '@mui/material/Button';
import styles from './booking.module.css';
import { LocalizationProvider, MobileDateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import dayjs from "dayjs";

const Booking = () => {

    // Temp
    const availableSeats = 3;

    // Show bookings container
    const [showBookings, setShowBookings] = useState(false);
    const onButtonClick = () => {
        setShowBookings(true);
    }

    // People count for booking
    const maxPeople = 4;
    const[peopleCount, setPeopleCount] = useState(1);
    const handlePeopleCountChange = (
        event,
        peopleCount
    ) => {
        setPeopleCount(peopleCount);
    }

    // Time
    const [time, setTime] = useState(dayjs(null));

    const renderToggleGroupChildren = () => {
        var children = [];
        for (let index = 1; index <= maxPeople; index++) {
            children.push(<ToggleButton value={index} disabled={index > availableSeats}>{index}</ToggleButton>);                      
        }
        return children;
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className={styles['container']} >
            {showBookings ? <div className={styles['book-time-container']}>
                <h2 className={styles['header']}>Book Time</h2>
                <div className={styles['input-container']}>
                    <h3>Select a time</h3>
                    <MobileDateTimePicker 
                        value={time}
                        onChange={newValue => setTime(newValue)}
                    disablePast/>
                </div>
                <div className={styles['input-container']}>
                    <h3 className={styles["header-with-subheader"]}>Select number of seats</h3>
                    <p className={styles["subheader"]}>{availableSeats} seats available</p>
                    <ToggleButtonGroup
                        color="primary"
                        value={peopleCount}
                        exclusive
                        onChange={handlePeopleCountChange}>
                            {renderToggleGroupChildren()}
                    </ToggleButtonGroup>
                </div>
                <Button onClick={() => {}} variant="contained" color="primary">Confirm time</Button>
            </div> : 
            <Button onClick={onButtonClick} variant="contained" color="primary">Book Time</Button>}
            
        </div>
        </LocalizationProvider>
    )
}

export default Booking;