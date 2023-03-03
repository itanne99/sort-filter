import React from "react";
import { Form, FormGroup } from "react-bootstrap";

export const SearchControl = (props) => {
  return (
    <FormGroup className={props.className}>
      <h6>Search</h6>
      <Form.Control type="text" />
    </FormGroup>
  );
};
