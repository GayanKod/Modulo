import axios, { AxiosResponse } from "axios";
import { Booking } from "../components/LecHallAllocation/Models";

axios.defaults.baseURL = "https://localhost:5000/api/";

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
};

const ClassRoomDetails = {
  list: () => requests.get("ClassRoom/all"),
  details: (id: number) => requests.get(`ClassRoom/${id}`),
};

const Resources = {
  details: (id: number) => requests.get(`Resource/id/${id}`),
};

const Bookings = {
  addBooking: (booking: any) => requests.post("Booking/post/", { booking }),
  removeBoooking: (id: number) => requests.delete(`Booking/delete?${id}`),
  list: () => requests.get("Booking/all-bookings"),
};

const agent = {
  ClassRoomDetails,
  Resources,
  Bookings,
};

export default agent;
