
export class Booking {
    constructor (timestamp, seatsTaken) {
        this.timestamp = timestamp;
        this.seatsTaken = seatsTaken;
    }
    toString() {
        return this.timestamp + ', ' + this.seatsTaken;
    }
}

export class BookingError extends Error {
    constructor(message) {
        super(message);
        this.name = "Booking Error";
    }
}

// Firestore data converter
export const bookingConverter = {
    toFirestore: (booking) => {
        return {
            timestamp: booking.timestamp,
            seatsTaken: booking.seatsTaken
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Booking(data.timestamp, data.seatsTaken);
    }
};


// Submit booking form
export function submitBookingFrom() {
    console.log("Validating booking form..");
    // Check if date/time is available
}