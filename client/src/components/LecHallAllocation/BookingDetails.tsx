import { HallDetails } from "./Details";

type BookingProps = {
  id: string | undefined;
};

function BookingDetails(props: BookingProps) {
  const hall = HallDetails.find(
    (item) => item.id === parseInt(props.id as string)
  );
  if (hall) {
    return (
      <div>
        <h3>Booking Details</h3>
        <div className="details">
          <p>
            <span>Hall ID</span> : {hall!.id}
            <hr />
          </p>
          <p>
            <span>Hall Name</span> : {hall.name}
            <hr />
          </p>
          <p>
            <span>Hall Capacity</span> : {hall.capacity} <hr />
          </p>
          <p>
            <span>Hall Location</span> : {hall.location} <hr />
          </p>
        </div>
      </div>
    );
  } else return <></>;
}

export default BookingDetails;
