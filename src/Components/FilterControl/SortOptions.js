import React from "react";
import { Form, FormGroup } from "react-bootstrap";

export const SortOptions = (props) => {
  return (
    <FormGroup className={props.className}>
      <h6>Sort</h6>
      <Form.Select aria-label="Sort by options">
        <option value="0">None</option>
        <option value="1">Name (Asc)</option>
        <option value="2">Name (Dsc)</option>
        <option value="3">Username (Asc)</option>
        <option value="4">Username (Dsc)</option>
        <option value="5">Email (Asc)</option>
        <option value="6">Email (Dsc)</option>
        <option value="7">Department (Asc)</option>
        <option value="8">Department (Dsc)</option>
        <option value="9">D.O.B (Asc)</option>
        <option value="10">D.O.B (Dsc)</option>
      </Form.Select>
    </FormGroup>
  );
};
