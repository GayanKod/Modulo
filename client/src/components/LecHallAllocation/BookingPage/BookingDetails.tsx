import { ClassRooms } from "../Details";

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
      <>
        <h3>Booking Details</h3>
        <p>
          <span>Hall ID</span> : {classRoom!.Id}
        </p>
        <p>
          <span>Hall Name</span> : {`${props.selected} ${classRoom.Id}`}
        </p>
        <p>
          <span>Hall Capacity</span> : {classRoom.capacity}
        </p>
        <p>
          <span>Hall Location</span> :
          {` Building: ${classRoom.BuildingNumber}, Floor: ${classRoom.FloorNumber}`}
        </p>
      </>
      // <div className="details">

      // </div>
    );
  } else return <></>;
}

export default BookingDetails;
