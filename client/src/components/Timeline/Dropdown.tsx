import React, { useState } from "react";
import "../../styles/TimelineDropdown.scss";

const Dropdown: React.FunctionComponent = () => {
  return (
    <div className="dropdown-container">
      <select id="batch">
        <option value="1">Batch:</option>
        <option value="2">Batch 21</option>
        <option value="3">Batch 20</option>
        <option value="2">Batch 19</option>
        <option value="3">Batch 18</option>
        <option value="2">Batch 17</option>
      </select>
      <select id="level">
        <option value="1">Level:</option>
        <option value="2">Level 1</option>
        <option value="3">Level 2</option>
        <option value="2">Level 3</option>
        <option value="3">Level 4</option>
      </select>
      <select id="semester">
        <option value="1">Semester:</option>
        <option value="2">Semester 1</option>
        <option value="3">Semester 2</option>
      </select>
    </div>
  );
};

export default Dropdown;
