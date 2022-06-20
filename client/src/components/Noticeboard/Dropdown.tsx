import React, { useState } from "react";
import "../../styles/NoticeDropdown.scss";

const Dropdown: React.FunctionComponent = () => {
  const [selectedOption, setSelectedOption] = useState<String>();

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
  };

  return(
          <div className="notice-select">
              <select className="notice-select-options">
                      <option value="2">Recently Added</option>
                      <option value="3">All</option>
              </select>
</div>
  );
};

export default Dropdown;



