
import "../../styles/TimelineForm.scss";
import FormImage from "../../assets/img/TimelineFormImage.png";
import Dropdown from "./Dropdown";
import { useForm } from "react-hook-form";


function TimelineForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  }
  

  return (
    <>
    <Dropdown/>
      <div className="form-container">
        <form className="wrapper" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="title">Event Title</label>
          <br />
          <input type="text" {...register("title", { required: true, maxLength: 30 })} id="title"  />
          {errors.title && <p style={{color: "red"}}>Required</p>}
          <br />
          <br />
          <label htmlFor="description" >Description</label>
          <br />
          <input type="text" {...register("description", { required: true, maxLength: 100 })} id="description" />
          {errors.description && <p style={{color: "red"}}>Required</p>}
          <br />
          <br />
          <label htmlFor="date">Start Date</label>
          <br />
          <input type="date" {...register("sdate", { required: true})} id="sdate"  />
          {errors.sdate && <p style={{color: "red"}}>Required</p>}
          <br />
          <br />
          <label htmlFor="date">End Date</label>
          <br />
          <input type="date" id="edate"  />
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
