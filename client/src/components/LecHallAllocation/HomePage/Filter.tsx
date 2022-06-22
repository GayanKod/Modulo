import { useState } from "react";
import Select from "react-select";
import { Options } from "../Models";

type FilterProps = {
  options: Options[];
  setSelected(selected: Options): void;
  selected: Options;
  id: string;
};

function Filter(props: FilterProps) {
  const customStyles1 = {
    option: (provided: any, state: { isSelected: any }) => ({
      ...provided,
      color: state.isSelected ? "white" : "#7b2cbf",
      backgroundColor: state.isSelected ? "#7b2cbf" : "white",
    }),
  };

  const customStyles2 = {
    option: (provided: any, state: { isSelected: any }) => ({
      ...provided,
      // color: state.isSelected ? "white" : "#7b2cbf",
      // backgroundColor: state.isSelected ? "#7b2cbf" : "white",
    }),
  };

  return (
    <div className={props.id == "home" ? "filter1" : "filter2"}>
      <Select
        className="select"
        options={props.options}
        placeholder={props.selected.label}
        onChange={(e) => {
          if (e) {
            props.setSelected(e);
          }
        }}
        styles={props.id == "home" ? customStyles1 : customStyles2}
      />
    </div>
  );
}

export default Filter;
