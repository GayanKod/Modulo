import { ClassRooms } from "./Details";

type BookingProps = {
  id: string;
  selected: string;
};

function BookingDetails(props: BookingProps) {
  const classRoom = ClassRooms.find(
    (item) => item.Id === parseInt(props.id as string)
  );
  if (classRoom) {
    return (
      <div>
        <h3>Booking Details</h3>
        <div className="details">
          <p>
            <span>Hall ID</span> : {classRoom!.Id}
            <hr />
          </p>
          <p>
            <span>Hall Name</span> : {`${props.selected} ${classRoom.Id}`}
            <hr />
          </p>
          <p>
            <span>Hall Capacity</span> : {classRoom.capacity} <hr />
          </p>
          <p>
            <span>Hall Location</span> :{" "}
            {`Building: ${classRoom.BuildingNumber}, Floor: ${classRoom.FloorNumber}`}
            <hr />
          </p>
        </div>
      </div>
    );
  } else return <></>;
}

export default BookingDetails;
