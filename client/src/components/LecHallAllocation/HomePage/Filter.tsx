import { useState } from "react";
import Select from "react-select";
import { Options } from "../Models";

type FilterProps = {
  options: Options[];
  setSelected(selected: Options): void;
  selected: Options;
};

function Filter(props: FilterProps) {
  const customStyles = {
    option: (provided: any, state: { isSelected: any }) => ({
      ...provided,
      color: state.isSelected ? "white" : "#7b2cbf",
      backgroundColor: state.isSelected ? "#7b2cbf" : "white",
    }),
  };

  return (
    <div className="filter">
      <Select
        className="select"
        options={props.options}
        placeholder={props.selected.label}
        onChange={(e) => {
          if (e) {
            props.setSelected(e);
          }
        }}
        styles={customStyles}
      />
    </div>
  );
}

export default Filter;
