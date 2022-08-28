import { useState } from "react";
import { Link } from "react-router-dom";



const defaultFormData = {
  title: "string",
  description: "string",
};

export default function App() {
  const [formData, setFormData] = useState(defaultFormData);
  const { title, description } = formData;

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
      <h1>Edit the Notice</h1>
      <p>Re-enter the title and description</p>

      <form onSubmit={onSubmit}>
        <label htmlFor="title">Notice Title:</label>
        <br />
        <input type="text" id="title" value={title} onChange={onChange} />
        <br />
        <br />
        <label htmlFor="description">Description:</label>
        <br />
        <input type="text" id="description" value={description} onChange={onChange} />
        <br />
        <br />
        <Link to ="/noticeboard">
        <button type="submit">Update Notice</button>
        </Link>
        
      </form>
    </>
  );
}