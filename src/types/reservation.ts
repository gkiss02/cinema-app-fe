type Reservation = {
    id: number;
    screening: Screening,
    seats: Seat[],
};

type Screening = {
    movie: Movie,
    date: Date,
};

type Movie = {
    title: string,
};

type Seat = {
    seatId: string,
};

export default Reservation;