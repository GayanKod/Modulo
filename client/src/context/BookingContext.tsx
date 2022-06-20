import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Booking } from "../components/LecHallAllocation/Models";

interface BookingContextValue {
  bookingList: Booking[] | null;
  setBookingList: (bookings: Booking[]) => void;
  deleteBooking: (id: number) => void;
  dateChanged: boolean;
  setDateChanged: (change: boolean) => void;
  bookings: number[];
  setBookings: (booking: number[]) => void;
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

  const [dateChanged, setDateChanged] = useState<boolean>(false);

  const [bookings, setBookings] = useState<number[]>([]);
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
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}
