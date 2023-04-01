import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { doc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();


export const getTemperatureRef = () => {
    return doc(db, 'sensors', 'temperature');
}

export const getBookingRef = () => {
  return collection(db, 'bookings');
}