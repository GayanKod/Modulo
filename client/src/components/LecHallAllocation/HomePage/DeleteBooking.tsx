import axios from "axios";
import { useState } from "react";
import agent from "../../../api/agent";

export const deleteBooking = (id: number) => {
  //   const [loading, setLoading] = use    State(true);

  agent.Bookings.removeBoooking(id)
    .then(() => console.log("deleted."))
    .catch((e) => console.log(e));
};
