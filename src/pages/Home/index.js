import React from 'react';
import { formatTimestamp, formatTemp } from '../../utils/formatter';
import { getTemperatureRef } from '../../utils/firebase';
import { onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from "react";
import styles from './home.module.css';

const Home = () => {

    const [tempSensor, setTempSensor] = useState({
        current_temp: '',
        last_timestamp: ''
    });

    useEffect(() => {
        const unsub = onSnapshot(getTemperatureRef(), (snapshot) => {
            if (snapshot.exists) {
                setTempSensor(snapshot.data());
            }
        });
        return () => {
            unsub();
        }
    }, []);

    return (
        <div className={styles['container']}>
            <p className={styles['sensor-value']}>{formatTemp(tempSensor.current_temp)}</p>
            <p className={styles['sensor-subheader']}>last updated {formatTimestamp(tempSensor.last_timestamp)}</p>
        </div>
    );
};

export default Home;