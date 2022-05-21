import "../../styles/LecHallBooking.scss";

function ColorCode() {
  return (
    <div
      className="colorcode"
      style={{ marginTop: "40px", marginLeft: "20px" }}
    >
      <p>
        <i className="fas fa-square" style={{ color: "grey" }}></i>
        <span
          style={{
            margin: "10px",
            color: "grey",
            fontSize: "12px",
          }}
        >
          BOOKED
        </span>
      </p>
      <p>
        <i className="far fa-square" style={{ color: "grey" }}></i>
        <span
          style={{
            margin: "10px",
            color: "grey",
            fontSize: "12px",
          }}
        >
          AVAILABLE
        </span>
      </p>
      <p>
        <i className="fas fa-square" style={{ color: "#7b2cbf" }}></i>
        <span
          style={{
            margin: "10px",
            color: "grey",
            fontSize: "12px",
          }}
        >
          SELECTED
        </span>
      </p>
    </div>
  );
}

export default ColorCode;
