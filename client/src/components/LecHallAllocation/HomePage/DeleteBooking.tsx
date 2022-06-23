import axios from "axios";
import ViewBookings from "./ViewBookings";

// type DeleteBookingProps = {
//   id: number;
//   setDeleted(status: boolean): void;
//   deleted: boolean;
// };

// export function DeleteBooking(props: DeleteBookingProps) {
export function deleteBooking(id: number) {
  //   const [loading, setLoading] = use    State(true);

  // agent.Bookings.removeBoooking(id)
  axios
    .delete("https://localhost:5000/api/Booking/delete", {
      params: {
        id: id,
      },
    })
    .then(() => {
      console.log("deleted.");
      // props.setDeleted(true);
    })
    .catch((e) => console.log(e));

  // if (!props.deleted) {
  //   return <></>;
  // }

  // return <ViewBookings />;
}
