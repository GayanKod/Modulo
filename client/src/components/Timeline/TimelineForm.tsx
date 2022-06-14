import { useState } from "react";
import "../../styles/TimelineForm.scss";
import FormImage from "../../assets/img/TimelineFormImage.png";

const defaultFormData = {
  title: "",
  description: "",
  sdate:"",
  edate:""
};

function TimelineForm() {
  const [formData, setFormData] = useState(defaultFormData);
  const { title, description, sdate, edate } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    setFormData(defaultFormData);
  };

  return (
    <>
      <div className="form-container">
        <form className="wrapper" onSubmit={onSubmit}>
          <label htmlFor="title">Event Title</label>
          <br />
          <input type="text" id="title" value={title} onChange={onChange} />
          <br />
          <br />
          <label htmlFor="title">Description</label>
          <br />
          <input type="text" id="description" value={description} onChange={onChange} />
          <br />
          <br />
          <label htmlFor="date">Start Date</label>
          <br />
          <input type="date" id="sdate" value={sdate} onChange={onChange} />
          <br />
          <br />
          <label htmlFor="date">End Date</label>
          <br />
          <input type="date" id="edate" value={edate} onChange={onChange} />
          <br />
          <br />
          <button type="submit">Add event</button>
        </form>
        <img className="img" src={FormImage} alt="formimage" />
      </div>
    </>
  );
}

export default TimelineForm;
