import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Booking } from "../components/LecHallAllocation/Models";

interface BookingContextValue {
  bookingList: Booking[];
  setBookingList: (bookings: Booking[]) => void;
  deleteBooking: (id: number) => void;
  dateChanged: string;
  setDateChanged: (changed: string) => void;
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
  const [bookingList, setBookingList] = useState<Booking[]>([]);

  function deleteBooking(id: number) {
    if (!bookingList) return;
    const items = [...bookingList];
    items.splice(id, 1);
  }

  const [dateChanged, setDateChanged] = useState<string>("");

  const [bookings, setBookings] = useState<number[]>([]);
  const [dateBooking, setDateBooking] = useState<
    { from: string; to: string }[]
  >([]);
  return (
    <BookingContext.Provider
      value={{
        bookingList,
        setBookingList,
        deleteBooking,
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
