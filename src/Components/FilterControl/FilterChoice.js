import React from 'react'
import { Form } from 'react-bootstrap'

export const FilterChoice = (props) => {
  return (
    <Form.Check
        type={`checkbox`}
        id={`filter`}
        name={`filter`}
        label={props.department}
        checked={props.filterControl.Filter[props.department]}
        onChange={() => {props.setFilter(props.department)}}
      />
  )
}