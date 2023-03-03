import React from "react";
import { Form, FormGroup } from "react-bootstrap";

export const FilterOptions = (props) => {
  return (
    <FormGroup className={props.className}>
      <h6>Filter</h6>
      {props.departments.map((department) => <Form.Check
        type={`checkbox`}
        id={`filter`}
        name={`filter`}
        label={department}
      />)}
    </FormGroup>
  );
};
