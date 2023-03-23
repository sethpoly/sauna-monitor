import React from "react";
import Button from '@mui/material/Button';
import styles from './booking.module.css';

const Booking = () => {
    return (
        <div className={styles['container']} >
            <Button onClick={() => { }} variant="contained" color="primary">Book Time</Button>
        </div>
    )
}

export default Booking;