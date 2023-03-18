import React from 'react';
import { formatTimestamp } from '../utils/formatter';
import { getTemperatureRef } from '../utils/firebase';
import { onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from "react";

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
        <div
            style={{
                justifyContent: 'Center',
                alignItems: 'Right',
                height: '100vh'
            }}
        >
            <p>Temperature = {tempSensor.current_temp}</p>
            <p>last updated {formatTimestamp(tempSensor.last_timestamp)}</p>
        </div>
    );
};

export default Home;