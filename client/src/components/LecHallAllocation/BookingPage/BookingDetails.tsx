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
      <div className="details">
        <h3>Classroom Details</h3>
        <p>
          <span>Classroom ID</span> : {classRoom!.Id}
        </p>
        <p>
          <span>Classroom Name</span> :{" "}
          {`${props.selected === "Lecture-halls" ? "Lecture Hall" : "Lab"} ${
            classRoom.Id
          }`}
        </p>
        <p>
          <span>Hall Capacity</span> : {classRoom.capacity}
        </p>
        <p>
          <span>Hall Location</span> :
          {` Building: ${classRoom.BuildingNumber}, Floor: ${classRoom.FloorNumber}`}
        </p>
      </div>
      // <div className="details">

      // </div>
    );
  } else return <></>;
}

export default BookingDetails;
