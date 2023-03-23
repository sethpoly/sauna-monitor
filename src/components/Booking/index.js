import React from "react";
import { useState } from "react";
import Button from '@mui/material/Button';
import styles from './booking.module.css';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const Booking = () => {

    const [showBookings, setShowBookings] = useState(false);
    const onButtonClick = () => {
        setShowBookings(true);
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className={styles['container']} >
            {showBookings ? null : <Button onClick={onButtonClick} variant="contained" color="primary">Book Time</Button>}
            <div className={styles['book-time-container']}>
                <h2 className={styles['header']}>Book Time</h2>
                <DatePicker/>
            </div>
        </div>
        </LocalizationProvider>
    )
}

export default Booking;