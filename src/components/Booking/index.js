import React from "react";
import { useState } from "react";
import Button from '@mui/material/Button';
import styles from './booking.module.css';
import { MobileDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const Booking = () => {

    const [showBookings, setShowBookings] = useState(false);
    const onButtonClick = () => {
        setShowBookings(true);
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className={styles['container']} >
            {showBookings ? <div className={styles['book-time-container']}>
                <h2 className={styles['header']}>Book Time</h2>
                <div className={styles['input-container']}>
                    <h3>Select a day</h3>
                    <MobileDatePicker disablePast="true"/>
                </div>
                <div className={styles['input-container']}>
                    <h3>Select a time</h3>
                    <MobileTimePicker disablePast="true"/>
                </div>
                <Button onClick={() => {}} variant="contained" color="primary">Confirm time</Button>
            </div> : 
            <Button onClick={onButtonClick} variant="contained" color="primary">Book Time</Button>}
            
        </div>
        </LocalizationProvider>
    )
}

export default Booking;