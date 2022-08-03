import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Booking } from "../components/LecHallAllocation/Models";

interface BookingContextValue {
  dateChanged: Date;
  setDateChanged: (changed: Date) => void;
  bookings: number[];
  setBookings: (booking: number[]) => void;

  dateBooking: { from: string; to: string }[];
  setDateBooking: ([]: { from: string; to: string }[]) => void;
}

export const BookingContext = createContext<BookingContextValue | undefined>(
  undefined
);

export function useBookingContext() {
  const context = useContext(BookingContext);

  if (context === undefined) {
    throw Error("Outside the provider");
  }

  return context;
}

export function BookingPovider({ children }: PropsWithChildren<any>) {
  const [dateChanged, setDateChanged] = useState<Date>(new Date());

  const [bookings, setBookings] = useState<number[]>([]);
  const [dateBooking, setDateBooking] = useState<
    { from: string; to: string }[]
  >([]);
  return (
    <BookingContext.Provider
      value={{
        dateChanged,
        setDateChanged,
        bookings,
        setBookings,
        dateBooking,
        setDateBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}
