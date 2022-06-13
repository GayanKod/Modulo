import { useState } from "react";
import "../../styles/TimelineForm.scss";
import FormImage from "../../assets/img/TimelineFormImage.png";

const defaultFormData = {
  title: "",
  body: "",
};

function TimelineForm() {
  const [formData, setFormData] = useState(defaultFormData);
  const { title, body } = formData;

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
        <div className="form-content">
          <h1>Form</h1>
          <form className="wrapper" onSubmit={onSubmit}>
            <label htmlFor="title">Title</label>
            <br />
            <input type="text" id="title" value={title} onChange={onChange} />
            <br />
            <br />
            <label htmlFor="body">Body</label>
            <br />
            <input type="text" id="body" value={body} onChange={onChange} />
            <br />
            <br />
            <button type="submit">Add an event</button>
          </form>
        </div>
        <img className="img" src={FormImage} alt="formimage" />
      </div>
    </>
  );
}

export default TimelineForm;
