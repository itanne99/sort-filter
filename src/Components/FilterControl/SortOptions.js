import React from "react";
import { Form, FormGroup } from "react-bootstrap";

const options = [
  { value: "0", label: "None" },
  { value: "1", label: "Name (Asc)" },
  { value: "2", label: "Name (Dsc)" },
  { value: "3", label: "Username (Asc)" },
  { value: "4", label: "Username (Dsc)" },
  { value: "5", label: "Email (Asc)" },
  { value: "6", label: "Email (Dsc)" },
  { value: "7", label: "Department (Asc)" },
  { value: "8", label: "Department (Dsc)" },
  { value: "9", label: "D.O.B (Asc)" },
  { value: "10", label: "D.O.B (Dsc)" },
];

export const SortOptions = (props) => {
  return (
    <FormGroup className={props.className}>
      <h6>Sort</h6>
      <Form.Select
        aria-label="Sort by options"
        onChange={(event) => {
          props.setSort(event.target.value);
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Form.Select>
    </FormGroup>
  );
};
