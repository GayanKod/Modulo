import React from 'react';
import "../../styles/NewUserAP.scss";

const NewUserAP = () => {
  return (
    <div className="newUser-container">
      <h1 className="newUser-title">New User</h1>
      <form className="newUser-form">
        <div className="newUser-item">
          <label>Username</label>
          <input type="text" placeholder="194081L" />
        </div>
        <div className="newUser-item">
          <label>Full Name</label>
          <input type="text" placeholder="Gayan Kodithuwakku" />
        </div>
        <div className="newUser-item">
          <label>Email</label>
          <input type="email" placeholder="user@gmail.com" />
        </div>
        <div className="newUser-item">
          <label>Default Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUser-item">
          <label>Phone</label>
          <input type="text" placeholder="+94 70 389 6644" />
        </div>
        <div className="newUser-item">
          <label>Address</label>
          <input type="text" placeholder="Colombo" />
        </div>
        <div className="newUser-item">
          <label>Gender</label>
          <div className="newUser-gender">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div className="newUser-item">
          <label>Role</label>
          <select className="newUser-select" name="active" id="active">
            <option value="Super Admin">Super Admin</option>
            <option value="Admin">Admin</option>
            <option value="Super Editor">Super Editor</option>
            <option value="Editor">Editor</option>
            <option value="Subscriber">Subscriber</option>
          </select>
        </div>
        <button className="newUser-button">Create</button>
        <button className="newUser-button">Import as a list (csv)</button>
      </form>
    </div>
  )
}

export default NewUserAP;