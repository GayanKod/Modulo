import axios from "axios";
import ViewBookings from "./ViewBookings";

// type DeleteBookingProps = {
//   id: number;
//   setDeleted(status: boolean): void;
//   deleted: boolean;
// };

// export function DeleteBooking(props: DeleteBookingProps) {
export function deleteBooking(id: number) {
  axios
    .delete("https://localhost:5000/api/Booking/delete", {
      params: {
        id: id,
      },
    })
    .then(() => {
      
    })
    .catch((e) => console.log(e));
}
