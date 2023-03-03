import React from "react";
import { FormGroup } from "react-bootstrap";
import { FilterChoice } from "./FilterChoice";

export const FilterOptions = (props) => {
  return (
    <FormGroup className={props.className}>
      <h6>Filter</h6>
      {props.departments.map((department) => <FilterChoice key={Math.random()} filterControl={props.filterControl} setFilter={props.setFilter} department={department} />)}
    </FormGroup>
  );
};
