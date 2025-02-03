import { createContext, useState, ReactNode, useContext } from "react";

type ReservationContextType = {
    title: string;
    date: Date;
    screeningId: string;
    reservedSeats: string[];
    setTitle: (title: string) => void;
    setDate: (date: Date) => void;
    setScreeningId: (id: string) => void;
    setReservedSeats: (seats: string[]) => void;
};

export const ReservationContext = createContext<ReservationContextType | undefined>(undefined);

type ReservationProviderProps = {
    children: ReactNode;
};

export const ReservationProvider = ({ children }: ReservationProviderProps) => {
    const [screeningId, setScreeningId] = useState<string>("");
    const [reservedSeats, setReservedSeats] = useState<string[]>([]);
    const [title, setTitle] = useState<string>("");
    const [date, setDate] = useState<Date>(new Date());
    
    return (
        <ReservationContext.Provider 
            value={{ title, date, screeningId, reservedSeats, setTitle, setDate, setScreeningId, setReservedSeats }}>
            {children}
        </ReservationContext.Provider>
    );
};

export const useReservationContext = () => {
    const context = useContext(ReservationContext);
    if (context === undefined) {
        throw new Error("useReservationContext must be used within a ReservationProvider");
    }
    return context;
};