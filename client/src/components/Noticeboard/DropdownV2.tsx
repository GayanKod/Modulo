import React, { useState } from "react";
import "../../styles/NoticeDropdown.scss";

const DropdownV2: React.FunctionComponent = () => {
  const [selectedOption, setSelectedOption] = useState<String>();

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
  };

  return(
          <div className="select">
              <select>
                      <option value="2">Staff Notices</option>
                      <option value="3">Student Notices</option>
              </select>
</div>
  );
};

export default DropdownV2;